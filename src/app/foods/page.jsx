import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {
    // const res = await fetch('');
    // const data = await res.json();

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    const foods = data.data;

    console.log(foods);
    
    return (
        <div>
            <h2>Foods: {foods.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    foods.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default FoodsPage;