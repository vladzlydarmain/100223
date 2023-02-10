function createElement(tag, properties, styles, parentElem){
    let parentBlock = document.querySelector(parentElem);
    let block = document.createElement(`${tag}`);
    parentBlock.append(block);
    for (let propertie of properties){
        block.setAttribute(`${propertie[0]}`,`${propertie[1]}`);
    }
    for (let style of styles){
        block.style[`${style[0]}`] = `${style[1]}`;
    }
}

// function createMultiElement(tag, properties,contentProperties,styles,contentStyles,rowsStyles, parentElem,contentNumber,rowsNumber){
//     let parentBlock = document.querySelector(parentElem);
//     let block = document.createElement(`${tag}`);
//     parentBlock.append(block);
//     if (tag === 'form'){
//         for (let elem of contentNumber){
//             let contentBlock = document.createElement(`${input}`);
//             block.append(contentBlock);
//             for (let contentPropertie of contentProperties){
//                 contentBlock.setAttribute(`${contentPropertie[0]}`,`${contentPropertie[1]}`);
//             }
//             for (let contentStyle of contentStyles){
//                 contentBlock.style[`${contentStyle[0]}`] = `${contentStyle[1]}`;
//             }
//         }
//         for (let propertie of properties){
//             block.setAttribute(`${propertie[0]}`,`${propertie[1]}`);
//         }
//     if (tag === 'table'){
//         for (let elem of rowsNumber){
//             let row = document.createElement('tr');
//             block.append(row);
//             for (let styleRow of rowsStyles){
//                 row.style[`${styleRow[0]}`] = `${styleRow[1]}`;
//             }
//             for (let contentElem of contentNumber){
//                 let cell = document.createElement('td');
//                 row.append(cell);
//                 for (let styleRow of rowsStyles){
//                     cell.style[`${styleRow[0]}`] = `${styleRow[1]}`;
//                 }
//             }
//         }
//     }
//     for (let style of styles){
//         block.style[`${style[0]}`] = `${style[1]}`;
//     }
    
//     }
// }

createElement(tag = 'input', properties = [['type','button'],['value','Return']], styles = [['width','200px'],['height','100px']], parentElem = 'body');
// createMultiElement(tag = 'form',properties = [['method','POST']],contentProperties = [['type','button']],)