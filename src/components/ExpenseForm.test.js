import { render, screen } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm"

test('renders amount as a text',() => {
    render(<ExpenseForm />);
    const amountElement = screen.getByText('Amount');
    // expect(amountElement).toBeInTheDocument();
})
// test('renders description as a text',() => {
//     render(<ExpenseForm />);
//     const amountElement = screen.getByText('Description');
//     // expect(amountElement).toBeInTheDocument();
// })
// test('renders category as a text',() => {
//     render(<ExpenseForm />);
//     const amountElement = screen.getByText('Category');
//     // expect(amountElement).toBeInTheDocument();
// })
// test('renders Add as a text',() => {
//     render(<ExpenseForm />);
//     const amountElement = screen.getByText('Add');
//     // expect(amountElement).toBeInTheDocument();
// })
// test('renders Download as a text',() => {
//     render(<ExpenseForm />);
//     const amountElement = screen.getByText('Download');
//     // expect(amountElement).toBeInTheDocument();
// })
// describe('Async component', () => {
//     test('renders label it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('label');
//         expect(itemsElement).not.toHaveLength(0);
//     })
//     test('renders amount it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('amount');
//         expect(itemsElement).not.toHaveLength(0);
//     })
//     test('renders description it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('description');
//         expect(itemsElement).not.toHaveLength(0);
//     })
//     test('renders catogory it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('Category');
//         expect(itemsElement).not.toHaveLength(0);
//     })
//     test('renders button it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('button');
//         expect(itemsElement).toHaveLength(0);
//     })
//     test('renders edit it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('edit');
//         expect(itemsElement).toHaveLength(0);
//     })
//     test('renders delete it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('delete');
//         expect(itemsElement).toHaveLength(0);
//     })
//     test('renders div it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('div');
//         expect(itemsElement).toHaveLength(0);
//     })
//     test('renders p it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('p');
//         expect(itemsElement).toHaveLength(0);
//     })
//     test('renders listitems it request succeeds', async() => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{amount: '100', description: 'petrol', Category: 'Fuel'}]
//         })
//         render(<ExpenseForm />)

//         const itemsElement = await screen.findAllByRole('listitem');
//         expect(itemsElement).toHaveLength(0);
//     })
// })