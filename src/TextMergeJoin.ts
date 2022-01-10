/**
 * In our app we have regions of text that may or not be contiguous.
 *
 * The text is given back as rectangles with x, y, width, and height properties.
 *
 * If the x, y, width, and height are close enough, we can assume they're the same word.
 *
 * Sometimes our rectangles are word fragments NOT the whole word so we need to join the words
 * again to form entire sentences.
 *
 * The test data has examples of what these partial regions would look like.
 */
export namespace TextMergeJoin {

    export interface IPDFTextWord {
        readonly pageNum: number;
        readonly x: number;
        readonly y: number;
        readonly width: number;
        readonly height: number;
        readonly str: string;
    }

    /**
     *
     */
     export function doMergeWords(data: ReadonlyArray<IPDFTextWord>): ReadonlyArray<IPDFTextWord> {
        const new_array: IPDFTextWord[] = []

        for(let i = 0; i < data.length; i++) {
            if ( i > 0 ) {
                if (Math.abs(data[i-1].width + data[i-1].x - data[i].x) < 1) {
                    new_array[new_array.length - 1] = {
                        pageNum: data[i-1].pageNum,
                        x: data[i-1].x,
                        y: data[i-1].y,
                        str: data[i-1].str + data[i].str,
                        width: data[i-1].width + data[i].width,
                        height: data[i-1].height,
                    }
                }else{
                    new_array.push(data[i])
                }
            }else{
                new_array.push(data[i])
            }
        }

        return new_array;
    }

}
