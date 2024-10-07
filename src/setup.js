import { addImage } from "./modules/addimage.js";
import { annotations } from "./modules/annotations.js";
import { context2d } from "./modules/context2d.js";
import { canvas } from "./modules/canvas.js";
import { cell } from "./modules/cell.js";
import { filters } from "./modules/filters.js";
import { jpeg_support } from "./modules/jpeg_support.js";
import { png_support } from "./modules/png_support.js";
import { split_text_to_size } from "./modules/split_text_to_size.js";
import { standard_fonts_metrics } from "./modules/standard_fonts_metrics.js";
import { ttfsupport } from "./modules/ttfsupport.js";
import { svg } from "./modules/svg.js";
import { total_pages } from "./modules/total_pages.js";
import { utf8 } from "./modules/utf8.js";
import { vfs } from "./modules/vfs.js";
import { ttffont, pdfObject } from "./libs/ttffont.js";


// export the necessary method from the modules instead of immediately calling them
function __init(jsPdfAPI) {
  addImage(jsPdfAPI);
  annotations(jsPdfAPI);
  context2d(jsPdfAPI);
  canvas(jsPdfAPI);
  cell(jsPdfAPI);
  filters(jsPdfAPI);
  jpeg_support(jsPdfAPI);
  png_support(jsPdfAPI);
  split_text_to_size(jsPdfAPI);
  standard_fonts_metrics(jsPdfAPI);
  ttfsupport(jsPdfAPI);
  svg(jsPdfAPI);
  total_pages(jsPdfAPI);
  utf8(jsPdfAPI);
  vfs(jsPdfAPI);
  ttffont(jsPdfAPI);
  pdfObject(jsPdfAPI);
}

export { __init };
