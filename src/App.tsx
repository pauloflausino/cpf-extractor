import React, { useState } from 'react';
import { Upload, FileText, Trash2 } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './styles/App.scss';

// Set worker URL for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Por favor, selecione um arquivo PDF válido.');
    }
  };

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const clearFile = () => {
    setPdfFile(null);
    setNumPages(0);
    setCurrentPage(1);
  };

  return (
    <div className="pdf-viewer">
      <div className="pdf-viewer__container">
        <div className="pdf-viewer__card">
          <h1 className="pdf-viewer__title">
            Leitor de PDF com CPFs
          </h1>

          <label className="pdf-viewer__upload-zone">
            <div className="pdf-viewer__upload-zone-content">
              <Upload className="pdf-viewer__upload-zone-icon" />
              <p className="pdf-viewer__upload-zone-text">
                <strong>Clique para fazer upload</strong> ou arraste e solte
              </p>
              <p className="pdf-viewer__upload-zone-hint">PDF (MAX. 10MB)</p>
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </label>

          {pdfFile && (
            <div>
              <div className="pdf-viewer__file-info">
                <div className="pdf-viewer__file-info-details">
                  <FileText className="pdf-viewer__file-info-icon" />
                  <span className="pdf-viewer__file-info-name">{pdfFile.name}</span>
                </div>
                <button
                  onClick={clearFile}
                  className="pdf-viewer__file-info-remove"
                >
                  <Trash2 />
                </button>
              </div>

              <div className="pdf-viewer__document">
                <Document
                  file={pdfFile}
                  onLoadSuccess={handleDocumentLoadSuccess}
                  className="pdf-viewer__document-container"
                >
                  <Page
                    pageNumber={currentPage}
                    className="pdf-viewer__document-page"
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Document>

                {numPages > 1 && (
                  <div className="pdf-viewer__document-navigation">
                    <button
                      onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                      disabled={currentPage <= 1}
                      className="pdf-viewer__document-navigation-button"
                    >
                      Anterior
                    </button>
                    <span className="pdf-viewer__document-navigation-info">
                      Página {currentPage} de {numPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(page => Math.min(page + 1, numPages))}
                      disabled={currentPage >= numPages}
                      className="pdf-viewer__document-navigation-button"
                    >
                      Próxima
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;