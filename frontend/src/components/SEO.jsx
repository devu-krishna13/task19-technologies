import React from 'react';
import SEO from '../../components/SEO';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  name = 'Task19 Technologies',
  image = 'https://www.task19.com/herobanner.png',
  schema
}) {
  return (
    <SEO 
        title="{title}"
        description=""
        canonical="https://www.task19.com/seo"
      />
  );
}
