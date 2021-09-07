import Greeting from './Greeting'
import{render, screen} from '@testing-library/react'

test('renders Hello World as a test', ()=>{
    //Arrange
    render(<Greeting/>);

    //Act


    //Assert
    const helloWorldElement = screen.getByText('Hello World', {exact: false})
    expect(helloWorldElement).toBeInTheDocument();
});