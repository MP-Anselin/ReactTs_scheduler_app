import {v4 as uuidv4} from "uuid";

export const contrast = (color: string, threshold = 0.5) => {

    const b = parseInt(color.substring(color.length - 2, color.length), 16);
    const g = parseInt(color.substring(color.length - 4, color.length - 2), 16);
    const r = parseInt(color.substring(color.length - 6, color.length - 4), 16);

    let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    let d = luminance > threshold ? '000000' : 'ffffff';
    return `${(color.charAt(0) === '#') ? '#' : ''}${d}`;

}

export const modalCustomStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export const actionInfo = () => {
    return (
        {
            hour: "",
            city: "",
            country: "",
            action: "",
            id: uuidv4(),
        }
    )
};