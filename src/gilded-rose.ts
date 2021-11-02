type BasicOperation = (variation: number) => void;
type NameCheck = (name: string) =>  boolean;
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
const names = {
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
    hasSameNameThat(name: string): boolean {
        return this.name === name;
    }
}

export class GildedRose {
    constructor(private items: Item[]) {}

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (!this.items[i].hasSameNameThat(names.agedBrie) && 
                !this.items[i].hasSameNameThat(names.backstage) && 
                this.items[i].quality > 0 && 
                !this.items[i].hasSameNameThat(names.sulfuras)) 
            {
                this.items[i].decreaseQuality(1);
            } else {
                if (this.items[i].quality < 50) this.items[i].increaseQuality(1);
                if (!this.items[i].hasSameNameThat(names.backstage) && 
                    ((this.items[i].sellIn + 1) < 6) && this.items[i].quality < 50) {
                    this.items[i].increaseQuality(2);
                } else {
                    this.items[i].increaseQuality(1);
                }
            }
            if (!this.items[i].hasSameNameThat(names.sulfuras)) this.items[i].decreaseSellIn(1);
            if (this.items[i].sellIn < 0 && !this.items[i].hasSameNameThat) {
                if (!this.items[i].hasSameNameThat(names.backstage) && this.items[i].quality > 0 && !this.items[i].hasSameNameThat(names.sulfuras)) {
                    this.items[i].increaseQuality(1);
                } else {
                    this.items[i].decreaseQuality(this.items[i].quality);
                }
            } else if (this.items[i].quality < 50){
                this.items[i].increaseQuality(1);
            }
        }
        return this.items;
    }
}
