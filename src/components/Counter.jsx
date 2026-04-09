

const Counter = () => {
    console.log('Counter value in counter component');
    
    return (
        <div>
            <h2 className='text-5xl'>Counter: 0</h2>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>Increment</button>
        </div>
    );
};

export default Counter;