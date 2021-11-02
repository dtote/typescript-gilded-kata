type BasicOperation = (variation: number) => void;
export interface ItemInterface {
    name: string;
    sellIn: number,
    quality: number;
    decreaseQuality: BasicOperation; 
    decreaseSellIn: BasicOperation;
    increaseQuality: BasicOperation;
    increaseSellIn: BasicOperation;
}
interface Stats {
    [key: string]: void;
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
}

export class GildedRose {
    maxBound = 50;
    minBound = 0;
    
    constructor(private items: Item[]) {}
    updateSulfurasStats(item: Item) {
        if (item.quality < this.maxBound) item.increaseQuality(1);
        if ((item.sellIn + 1) < 6 && (item.quality < this.maxBound)) {
            item.increaseQuality(2);
        }
        if (item.sellIn < this.minBound) item.decreaseQuality(1);
        else if (item.sellIn > this.minBound) item.increaseQuality(1);
    }
    updateBackstageStats(item: Item) {
        item.decreaseSellIn(1);
        if (item.sellIn < this.minBound) item.decreaseQuality(1);
        else if (item.sellIn > this.minBound) item.increaseQuality(1);
    }
    updateAgedBrieStats(item: Item) {
        if (item.quality < this.maxBound) item.increaseQuality(1);
        if ((item.sellIn + 1) < 6 && (item.quality < this.maxBound)) {
            item.increaseQuality(2);
        }
        item.decreaseSellIn(1);
        item.increaseQuality(1);
    }
    updateDefaultStats(item: Item) {
        if (item.quality < this.minBound) item.decreaseQuality(1);
        else if (item.sellIn < this.minBound) item.increaseQuality(1);
        if (item.sellIn > this.minBound) item.increaseQuality(1);
    }
    updateQuality() {
        for (const item of this.items) {
            const updateStats: Stats = {
                'Aged Brie': this.updateAgedBrieStats(item),
                'Backstage passes to a TAFKAL80ETC concert': this.updateBackstageStats(item),
                'Sulfuras, Hand of Ragnaros': this.updateSulfurasStats(item),
            }
            const found = Object.keys(updateStats).find((key) => key === item.name);
            found ? updateStats[item.name] : this.updateDefaultStats(item);
        }
        return this.items;
    }
}
