import React, {useContext, useEffect, useState} from "react";
import Modal from "react-modal";
import {GlobalContext} from '../context/GlobalState'
import {CirclePicker} from "react-color";
import {actionInfo, modalCustomStyles} from "../utils/utils";

const TaskForm: React.FC = () => {
    const {date, task, addTask, saveTask, setDate, deleteTask} = useContext(GlobalContext);

    const [name, setName] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [actions, setActions] = useState([actionInfo]);
    const [color, setColor] = useState("#f44336");
    const [error, setError] = useState(false);


    useEffect(() => {

        if (task) {
            setPlateNumber(task.plateNumber || "");
            setActions(task.actions || [actionInfo]);
            setName(task.name || "");
            setColor(task.color || "#f44336");
        }
    }, [task]);

    const closeModal = () => {
        addTask(null);
        setError(false);
    };

    const _saveTask = () => {

        const checkError = [
            name.trim().length || 0,
        ]

        const hasError = actions.find((el) => {
            const values = Object.values(el);
            for (let index in values) {
                if (!values[index])
                    return true;
            }
            return false;
        } )

        if (checkError.find((el: number) => el < 1) !== undefined || hasError) {
            setError(true);
            return;
        }
        setError(false);

        saveTask({
            ...task,
            date,
            name,
            actions,
            color,
            plateNumber,
        });
        setDate(date);
        closeModal();

    };

    const _deleteTask = () => {
        deleteTask(task.id);
        setDate(date);
        closeModal();
        setError(false);
    }

    const addAction = () => {
        setActions([...actions, actionInfo]);
    }

    const removeAction = (index: number) => {
        const list = [...actions];
        list.splice(index, 1);
        setActions(list);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> |
                               React.ChangeEvent<HTMLSelectElement>,
                               index: number) => {
        const { name, value } = e.target;
        const list = [...actions];
        // @ts-ignore
        list[index][name] = value;
        setActions(list);
    };

    const returnHtmlActionList = () => {
        return actions.map((el, index) => {
            return (
                <div className="box">
                    <select
                        className="my-text-input"
                        name="actions"
                        id="actions"
                        value={el.option}
                        onChange={(e) => handleInputChange(e, index)}
                    >
                        <option value="free">free</option>
                        <option value="arrived">arrived</option>
                        <option value="not available">not available</option>
                        <option value="unavailable">unavailable</option>
                        <option value="leave">leave</option>
                    </select>
                    &nbsp;&nbsp;

                    <input name="hour"
                           className="my-text-input"
                           value={el.hour}
                           type="time"
                           id="hour"
                           min="09:00"
                           max="18:00"
                           onChange={(e) => handleInputChange(e, index)}
                    />

                    <input
                        className="my-text-input"
                        type="text"
                        id="city"
                        name="city"
                        value={el.city}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder="City Name"
                    />

                    <input
                        className="my-text-input"
                        type="text"
                        id="country-"
                        name="country"
                        value={el.country}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder="Country Name"
                    />

                    <button className="button button-red" onClick={() => removeAction(index)}>-</button>
                </div>
            )
        })
    }

    return (
        <Modal
            isOpen={task != null}
            onRequestClose={closeModal}
            style={modalCustomStyles}
            ariaHideApp={false}
            contentLabel="Task Form"
        >
            <div className="task-form">

                <label>Driver Name</label>
                <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text1"
                    placeholder="Driver Name"
                />

                <label>Plate Number</label>
                <input type="text1"
                       value={plateNumber}
                       placeholder="ex : Aa-999-Aa"
                       name="number plate"
                       pattern="^([A-Za-z]{2}-?[0-9]{3}-?[A-Za-z]{2})?([0-9]{4}-?[A-Za-z]{2}-?[0-9]{2})?([0-9]{3}-?[A-Za-z]{3}-?[0-9]{2})?$"
                       title="French Number Plate"
                       onChange={(e) => setPlateNumber(e.target.value)}
                />

                <br/>

                <div className="center">
                    <div className="row1">
                        <label>Actions</label>
                        &nbsp;&nbsp;
                        <button className="button button-green" onClick={addAction}>+</button>
                    </div>
                    <br/>
                    {returnHtmlActionList()}
                </div>

                <label>Color</label>
                <div>
                    <CirclePicker
                        color={color}
                        onChange={(colorBis: any) => {
                            setColor(colorBis.hex);
                        }}
                    />
                </div>

                <div>
                    <button className="button button-red" onClick={closeModal}>
                        Cancel
                    </button>
                    {task && task.id ? (
                        <button
                            className="button button-orange"
                            onClick={_deleteTask}
                        >
                            Delete
                        </button>
                    ) : null}
                    <button
                        className="button button-green"
                        onClick={_saveTask}
                    >
                        Save
                    </button>
                </div>
                {error ? <p className="error">All the fields of the task is required</p> : null}
            </div>
        </Modal>
    );
}

export default TaskForm;
