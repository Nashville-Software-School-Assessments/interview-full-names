import studentCode from "../../scripts/main.js"

const {
    createFullNames, bankCustomers, ticketHolders
} = studentCode


describe("Name extraction", () => {

    test('Function is defined', () => {
        expect(createFullNames).toBeDefined();
    });

    test('Function returns something', () => {
        expect(createFullNames(bankCustomers)).toBeDefined();
    });

    test('Function extracts bank customer names', () => {
        expect(createFullNames(bankCustomers)).toMatchObject(
            [
                "inactive",
                "Dermot Sweetnam",
                "Shirlee Lis",
                "inactive",
                "inactive",
                "inactive",
                "Blair Palser",
                "inactive",
                "inactive",
                "inactive"
            ]);
    });

    test('Function extracts ticket holder names', () => {
        expect(createFullNames(ticketHolders)).toMatchObject(
            [
                "Lindi Blaksland",
                "Pebrook Pidgley",
                "Shae Lauret",
                "inactive",
                "inactive",
                "Gunter Ciementini",
                "inactive",
                "inactive",
                "Jody Brocket",
                "inactive"
            ]);
    });
});


