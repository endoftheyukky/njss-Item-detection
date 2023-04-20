import { getDocument } from 'pdfjs-dist';

export async function getPdf(file: File, viewer: HTMLElement) {
  const pdf = await getDocument(URL.createObjectURL(file)).promise;
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1 });

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Unable to create canvas context');

  canvas.width = viewport.width;
  canvas.height = viewport.height;

  const renderContext = {
    canvasContext: context,
    viewport: viewport
  };

  await page.render(renderContext).promise;

  viewer.innerHTML = '';
  viewer.appendChild(canvas);
}
