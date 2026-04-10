import Image from "next/image";

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const { dish_name, image_link, main_ingredients, approximate_nutrition_per_serving } = data.data;
    // console.log(food);


    return (
        <div>
            <h2>Showing details of food: {foodId}</h2>
            <h3 className="text-3xl">{dish_name}</h3>
            <Image src={image_link} alt={dish_name} width={300} height={300} />
            <h2 className="text-2xl">Main Ingredients:</h2>
            <ul className="list-disc list-inside">
                {
                    main_ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }
            </ul>
            <h2 className="text-2xl capitalize">{"approximate_nutrition_per_serving".replace(/_/g,' ')}:</h2>
            <ul className="list-disc list-inside">
                {
                    Object.entries(approximate_nutrition_per_serving).map(([key,value], index)=> <li key={index}><span className="capitalize">{key}</span> : {value}</li>)
                }
            </ul>

        </div>
    );
};

export default FoodDetailPage;