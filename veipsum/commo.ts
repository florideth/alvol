// Define a type for income streams
type IncomeStream = "salary" | "bonus" | "sidehustle";

// Create an interface for a person's financial details
interface FinancialDetails {
  name: string;
  incomeStreams: Record<IncomeStream, number>;
  totalIncome: () => number;
}

// Implement the interface with a class
class Person implements FinancialDetails {
  name: string;
  incomeStreams: Record<IncomeStream, number>;

  constructor(name: string, incomeStreams: Record<IncomeStream, number>) {
    this.name = name;
    this.incomeStreams = incomeStreams;
  }

  // Calculate the total income from all streams
  totalIncome(): number {
    return Object.values(this.incomeStreams).reduce((acc, curr) => acc + curr, 0);
  }
}

// Example usage
const person = new Person("Alex", { salary: 50000, bonus: 5000, sidehustle: 1500 });
console.log(`${person.name}'s total income: $${person.totalIncome()}`);
