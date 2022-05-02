import React, {useContext, useEffect, useState} from "react";
import Modal from "react-modal";
import {GlobalContext} from '../context/GlobalState'
import {CirclePicker} from "react-color";
import {modalCustomStyles} from "../utils/utils";

const TaskForm: React.FC = () => {
    const {date, task, addTask, saveTask, setDate, deleteTask} = useContext(GlobalContext);

    const [name, setName] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [hour, setHour] = useState("");
    const [color, setColor] = useState("#f44336");
    const [error, setError] = useState(false);

    useEffect(() => {

        if (task) {
            setPlateNumber(task.plateNumber || "");
            setHour(task.hour || "");
            setName(task.name || "");
            setColor(task.color || "#f44336");
        }
    }, [task]);

    const closeModal = () => {
        addTask(null);
        setError(false);
    };

    const _saveTask = () => {

        if (name.trim().length < 1 ||
            hour.trim().length < 1 ||
            plateNumber.trim().length < 1
        ) {
            setError(true);
            return;
        }
        setError(false);

        saveTask({
            ...task,
            date: date,
            hour: hour,
            name: name,
            color: color,
            plateNumber: plateNumber,
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
                    type="text"
                    placeholder="Task Name"
                />

                <label>Hours</label>

                <input name="hour"
                       value={hour}
                       type="time"
                       id="hour"
                       min="09:00"
                       max="18:00"
                       onChange={(e) => setHour(e.target.value)}
                />

                <label>Plate Number</label>

                <input type="text"
                       value={plateNumber}
                       name="number plate"
                       pattern="^([A-Za-z]{2}-?[0-9]{3}-?[A-Za-z]{2})?([0-9]{4}-?[A-Za-z]{2}-?[0-9]{2})?([0-9]{3}-?[A-Za-z]{3}-?[0-9]{2})?$"
                       title="French Number Plate"
                       onChange={(e) => setPlateNumber(e.target.value)}
                />

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
