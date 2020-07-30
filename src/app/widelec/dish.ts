export interface DishAttrs {
  id: number;
  name: string;
  imageUrl: string;
  difficulty: number;
  vege: boolean;
  sweet: boolean;
}

export class Dish {
  static defaultImageUrl = '/assets/empty-dish.png';
  id: number;
  dishName: string;
  imageUrl: string;
  difficulty: number;
  vege: boolean;
  sweet: boolean;

  constructor(attrs: Partial<DishAttrs> = {}) {
    this.id = attrs.id;
    this.dishName = attrs.name;
    this.imageUrl = attrs.imageUrl || Dish.defaultImageUrl;
    this.difficulty = attrs.difficulty;
    this.vege = attrs.vege;
    this.sweet = attrs.sweet;
  }

  get name(): string {
    return this.dishName;
  }

  set name(value: string) {
    this.dishName = value;
  }
}
