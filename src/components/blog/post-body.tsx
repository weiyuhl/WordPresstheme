
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface PostBodyProps {
  description: string; // Plain text description
  content?: string;   // Full HTML content for the article
}

export function PostBody({ description, content }: PostBodyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if the "Read More" functionality is needed.
  // This is true if `content` exists and is substantially different from/longer than just the description.
  const hasExpandableContent = content && content.trim().length > description.trim().length + 50; // Check content length against description length, trim whitespace for more accurate comparison. Added a 50 char threshold.


  if (!hasExpandableContent) {
    // If no expandable content, or content is not substantially longer than the description,
    // render the `content` if available (as it's assumed to be the full, formatted HTML).
    // Otherwise, fall back to rendering the `description` wrapped in a paragraph.
    if (content) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return <p>{description}</p>;
  }

  // Has expandable content
  if (isExpanded) {
    // Show the full HTML content
    return <div dangerouslySetInnerHTML={{ __html: content! }} />;
  } else {
    // Show the plain text description and a "Read More" button
    return (
      <>
        <p>{description}</p>
        <div className="mt-6 text-center"> {/* Increased margin-top for better spacing */}
          <Button
            variant="outline"
            onClick={() => setIsExpanded(true)}
            className="text-base px-6 py-2" // Made button slightly larger
          >
            继续阅读
          </Button>
        </div>
      </>
    );
  }
}
