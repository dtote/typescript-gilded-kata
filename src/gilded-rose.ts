type BasicOperation = (variation: number) => void;
type NameCheck = (...names: string[]) =>  boolean;
export interface ItemInterface {
    name: string;
    sellIn: number,
    quality: number;
    decreaseQuality: BasicOperation; 
    decreaseSellIn: BasicOperation;
    increaseQuality: BasicOperation;
    increaseSellIn: BasicOperation;
    hasSameNameThat: NameCheck;

}
export const names = {
    agedBrie: 'Aged Brie',
    backstage: 'Backstage passes to a TAFKAL80ETC concert',
    sulfuras: 'Sulfuras, Hand of Ragnaros',
}
export class Item implements ItemInterface {
    constructor(public name: string, public sellIn: number, public quality: number) {}
    decreaseQuality(variation: number): void {
        this.quality -= variation;
    }
    decreaseSellIn(variation: number): void {
        this.sellIn -= variation;
    }
    increaseQuality(variation: number): void {
        this.quality += variation;
    }
    increaseSellIn(variation: number): void {
        this.sellIn += variation;
    }
    hasSameNameThat(...names: string[]): boolean {
        return names.some((name) => name === this.name);
    }
}

export class GildedRose {
    constructor(private items: Item[]) {}

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const currentItem: Item = this.items[i];
            const notBackStage = !currentItem.hasSameNameThat(names.backstage)
            const increasedSellInIsUnderSix = (currentItem.sellIn + 1) < 6
            if (!currentItem.hasSameNameThat(names.agedBrie, names.backstage, names.sulfuras) && currentItem.quality > 0) {
                currentItem.decreaseQuality(1);
            } else if (notBackStage && increasedSellInIsUnderSix && (currentItem.quality + 1) < 50) {
                    currentItem.increaseQuality(3);
            } else if ((currentItem.quality + 1) < 50){
                    currentItem.increaseQuality(2);
            }
    
            if (!currentItem.hasSameNameThat(names.sulfuras)) currentItem.decreaseSellIn(1);
            if (currentItem.sellIn < 0 && !currentItem.hasSameNameThat(names.agedBrie)) {
                if (!currentItem.hasSameNameThat(names.backstage, names.sulfuras) && currentItem.quality > 0) {
                    currentItem.increaseQuality(1);
                } else {
                    currentItem.decreaseQuality(currentItem.quality);
                }
            } else if (currentItem.quality < 50){
                currentItem.increaseQuality(1);
            }
        }
        return this.items;
    }
}
