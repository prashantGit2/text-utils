import React, { useState } from "react";

const TextUtil = ({ heading }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="form-group ">
        <label htmlFor="text-box">
          <h1>{heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="text-box"
          placeholder=""
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-group my-2 d-flex justify-content-around">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setText((prev) => prev.toUpperCase())}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setText((prev) => prev.toLowerCase())}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {navigator.clipboard.writeText(text)}}
        >
          Copy to Clipboard
        </button>

        <button
          disabled
          type="button"
          className="btn btn-dark"
          onClick={() => {setText(navigator.clipboard.readText())}}
        >
          Paste from Clipboard
        </button>

        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setText(prevText=>(
              prevText.split(/[ ]+/).join(" ")
            ))
          }}
        >
          remove Extra spaces
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setText("")}
        >
          Clear
        </button>
      </div>
      <div className="container my-5">
        <h1>Text Details</h1>
        <p>Character Count : {text.length} </p>
        <p>
          Character Count(without spaces) :{" "}
          {text.trim().split(" ").join("").length}{" "}
        </p>

        <p>Word Count: {text ? text.trim().split(/[ ]+/).length : 0} </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextUtil;
