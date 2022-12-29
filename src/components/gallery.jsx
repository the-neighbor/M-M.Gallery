import { useEffect, useLayoutEffect } from "react";
import { useState, useRef } from "react";
import GalleryEntry from "./gallery-entry";
import Modal from "./modal";

export default function Gallery (props) {
    const [images, setImages] = useState((props && props.images ? [...(props.images)] : []));
    const [cssCode, setCssCode] = useState("");
    const [selected, setSelected] = useState({});
    const ref = useRef(null);
    console.log(props, props.images, ...(props.images))
    console.log(images)

    // const [width, setWidth] = useState(0);
    // const [height, setHeight] = useState(0);
  
    // function updateSize () {
    //     setWidth(ref.current.offsetWidth);
    //     setHeight(ref.current.offsetHeight);
    // }
    // useLayoutEffect(() => {
    //     updateSize();
    //     window.addEventListener('resize', updateSize);
    //     return () => window.removeEventListener('resize', updateSize);
    // }, []);

    // function createCode (cssData) {
    //     var divsCode = "";
    //     cssData.divsCss.forEach((divCss, i) => {
    //         divsCode += `
    //         .div${i} {
    //             ${divCss}
    //         }
    //         `
    //     }
    //     )
    //     const cssString = `
    //     .grid-parent {
    //         ${cssData.parentCss}
    //         }
    //     ${divsCode}
    //     `
    //     return cssString;
    // }

    // async function fetchGrid() {
    //     const rows = {lg:4, md:5, sm:6, xs:7};
    //     const columns = {lg:5, md:4, sm:3, xs:2};
    //     const sizes = {lg: 1200, md: 992, sm: 768, xs: 576}
    //     const pieces = images.length
    //     let css = "";
    //     for (let k of Object.keys(rows).reverse()) {
    //         console.log(k);
    //         let url = `https://m-m-gridgen.herokuapp.com/api/gen?rows=${rows[k]}&columns=${columns[k]}&pieces=${pieces}`;
    //         const data = await fetch(url);
    //         if (data.ok) {
    //             const json = await data.json();
    //             console.log(json);
    //             const code = createCode(json.cssData);
    //             console.log(code);
    //             css += `\n@media only screen and (min-width: ${sizes[k]}px) {
    //                 ${code}
    //             }`
    //         }
    //     }
    //     setCssCode(css);
    // }

    // useEffect(() => {
    //     fetchGrid();
    //  }, [images])


    return (
        <div className="gallery">
            <style>
            </style>
            <div className="grid-parent" >
                {
                props.images.map((image, i) => {
                    return (
                        <div className="" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setSelected(image); console.log(selected)}} className={`div${i}`} key={i}>
                            <GalleryEntry image={image} setSelected={setSelected}/>
                        </div>
                    )
                })}
                </div>
                <Modal image={selected}></Modal>
        </div>
    )
}