'use client'; 
import React, { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface ExpandableItem {
  id: string;
  question: string;
  answer?: string;
  isExpanded?: boolean;
}

interface ExpandableListProps {
  items: ExpandableItem[];
  className?: string;
  allowMultiple?: boolean;
  defaultExpanded?: string[];
}

const ExpandableList: React.FC<ExpandableListProps> = ({ 
  items, 
  className = '', 
  allowMultiple = false,
  defaultExpanded = []
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(defaultExpanded)
  );

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(itemId);
      }
      
      return newSet;
    });
  };

  const isExpanded = (itemId: string) => expandedItems.has(itemId);

  return (
    <div className={`w-full space-y-4 sm:space-y-6 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="w-full">
          {/* Header */}
          <button
            onClick={() => toggleItem(item.id)}
            className={`w-full bg-green-950 p-4 sm:p-5 md:p-6 flex justify-between items-center 
                        hover:bg-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300`}
            aria-expanded={isExpanded(item.id)}
            aria-controls={`content-${item.id}`}
          >
            <h3 className="text-white font-medium text-base sm:text-lg md:text-xl leading-5 sm:leading-6 md:leading-7 text-left flex-1 pr-4">
              {item.question}
            </h3>
            
            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-blue-200/40 rounded-lg flex items-center justify-center transition-transform duration-200">
            <Plus
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded(item.id) ? "rotate-45" : "rotate-0"
              }`}
            />
            </div>
          </button>

          {/* Content */}
          <div
            id={`content-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded(item.id) ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!isExpanded(item.id)}
          >
            <div className="bg-green-800 rounded-xl p-4 sm:p-5 md:p-6">
              <p className="text-white/90 font-normal text-sm sm:text-base leading-5 sm:leading-6">
                {item.answer || 'Content for this question will be available soon.'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandableList;