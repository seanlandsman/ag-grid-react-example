import React, {forwardRef, useImperativeHandle, useRef} from "react";

export default forwardRef((props, ref) => {
    console.log("NumericEditor", props);

    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        getValue: () => inputRef.current && inputRef.current.value,
        focusIn: (...args) => {
            console.log("focusIn", args);
            return inputRef.current && inputRef.current.focus();
        }
    }))


    return (
        <input
            ref={inputRef}
            type="number"
            defaultValue={props.value}
            style={{width: "100%"}}
        />
    );
});

