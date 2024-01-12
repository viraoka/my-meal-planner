const MyList = ({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {
    return (
        <div className="myList">
            <div>
                <h1>Weekly Meal Plan Ideas</h1>
                <button
                onClick={addMeal}
                className="button-add">
                Add
                </button>
            </div>
            <div>
                {mealPlans.map(({id, title, mealForADay}) => (
                    <div 
                    className={`meal ${id === selectedDay ? "selected" : "default"}`}
                    onClick={() => setSelectedDay(id)}
                    key={id}>
                        <p className="field"> {title} </p>
                        <p className="field"> {mealForADay.substring(0, 60)} </p>
                        <button 
                        onClick={() => deleteDay(id)}
                        className="button-delete">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default MyList;