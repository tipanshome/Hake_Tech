import { useEffect } from 'react';

const BASE_TITLE = 'HAKE Technologies | Spatial Intelligence & Geospatial Solutions';

export function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | HAKE Technologies` : BASE_TITLE;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
}

export default useDocumentTitle;
