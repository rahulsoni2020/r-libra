import "./DragListItem.css";
import { useState } from "react";

const DragListItem = () => {
    const initialItems = Array.from({ length: 5 }, (_, i) => i + 1);
    const [itemList, setItemList] = useState(initialItems);
    const [dragItemIndex, setDragItemIndex] = useState(null);

    const dragStart = (index) => {
        setDragItemIndex(index);
    };

    const dragEnter = (index) => {
        if (dragItemIndex === null || dragItemIndex === index) return;

        const newList = [...itemList];
        const [draggedItem] = newList.splice(dragItemIndex, 1);
        newList.splice(index, 0, draggedItem);

        setDragItemIndex(index);
        setItemList(newList);
    };

    const dragEnd = () => {
        setDragItemIndex(null);
    };

    return (
        <div className="container">
            <div className="list-container">
                {itemList.map((item, index) => (
                    <div
                        key={item}
                        className="list-item"
                        draggable
                        onDragStart={() => dragStart(index)}
                        onDragEnter={() => dragEnter(index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnd={dragEnd}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragListItem;
