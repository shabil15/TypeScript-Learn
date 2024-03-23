class Product {
  protected name: string;
  protected price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, Price: ${this.price}`);
  }
}

class ElectronicsProduct extends Product {
  private warrantyPeriod: number;

  constructor(name: string, price: number, warrantyPeriod: number) {
    super(name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(`Warranty Period: ${this.warrantyPeriod} years`);
  }
}

class ClothingProduct extends Product {
  private size: string;
  private color: string;

  constructor(name: string, price: number, size: string, color: string) {
    super(name, price);
    this.size = size;
    this.color = color;
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(`Size: ${this.size}, Color: ${this.color}`);
  }
}

class Inventory {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product): void {
    this.products.push(product);
    console.log(`${product.getName()} added to inventory`);
  }

  removeProduct(productName: string): void {
    const index = this.products.findIndex(
      (product) => product.getName() === productName
    );
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`${productName} removed from inventory`);
    } else {
      console.log(`${productName} not found in inventory`);
    }
  }

  displayInventory(): void {
    console.log("Inventory:");
    this.products.forEach((product) => product.displayInfo());
  }
}




const inventory = new Inventory();

const laptop = new ElectronicsProduct("Laptop", 999, 2);
const shirt = new ClothingProduct("Shirt", 29.99, "M", "Blue");

inventory.addProduct(laptop);
inventory.addProduct(shirt);

inventory.displayInventory();
inventory.removeProduct("Laptop");
inventory.displayInventory();


export {}