# Search Functionality Implementation

## Overview
Search functionality has been successfully implemented across the entire codebase. When users click the search button, an input bar slides from the search position, and navbar options get hidden, allowing full focus on search.

## Features Implemented

### 1. **Search Input with Animation**
   - Click search icon to activate search mode
   - Input bar slides from right (desktop) or left (mobile)
   - Navbar options (PROGRAMMES, CARE PATHWAY, ABOUT, FAQ, LEVELS, CONTACT) automatically hide during search
   - Smooth transitions with Framer Motion animations

### 2. **Real-time Search Results**
   - As you type, search results are instantly rendered
   - Results appear in a modal overlay between navbar and footer
   - Displays up to 8 most relevant results based on fuzzy search algorithm

### 3. **Search Algorithm**
   - Searches across all pages and content in `searchData.ts`
   - Scores results based on:
     - Exact title matches (highest priority)
     - Description matches
     - Keyword matches
     - Partial word matches
   - Results sorted by relevance score

### 4. **Search Data Structure**
   - Located in: `src/utils/searchData.ts`
   - Includes searchable content from:
     - Home page
     - Programmes (Mental Health, Wellness, Holistic Wellbeing)
     - FAQ
     - Contact
     - Exclusive Access
     - Booking
     - My Bookings
   - Each item has: id, title, description, path, category, keywords

### 5. **Search Results Display**
   - Modal with semi-transparent backdrop
   - Results grouped with:
     - Result title
     - Description
     - Category badge
     - Navigation path
   - Hover effects for better UX
   - Smooth animations for each result
   - "No results found" message when search yields nothing

### 6. **Responsive Design**
   - **Mobile**: Search icon on top-right, input slides out horizontally
   - **Tablet**: Full-width search input appears
   - **Desktop**: Search input appears inline with navbar options hidden
   - Mobile menu continues to function independently

### 7. **User Experience**
   - Search input auto-focuses when activated
   - Click outside search modal to close
   - Clicking on a result navigates to that page and closes search
   - "X" button to close search results
   - Keyboard support (can type immediately after opening)

## Files Modified/Created

### New Files:
1. **`src/components/SearchResults.tsx`**
   - Component for displaying search results modal
   - Handles result rendering with animations
   - Close functionality

### Modified Files:
1. **`src/components/layout/Header.tsx`**
   - Added search state management (`isSearchOpen`, `searchQuery`)
   - Imported `SearchResults` component and `searchItems` function
   - Added search input with animation
   - Hide/show navbar options during search
   - Added search functionality to both search buttons

### Existing Files (No Changes):
- `src/utils/searchData.ts` - Already contains comprehensive search data
- All page and component files - Search works across existing content

## How to Use

### Desktop Users:
1. Click the search icon in the right navbar
2. Type your query in the input bar
3. View results in the modal
4. Click on any result to navigate
5. Click the X button or outside the modal to close

### Mobile Users:
1. Click the search icon (top-right)
2. Type your query in the input bar
3. View results that appear below
4. Tap any result to navigate
5. Tap the X button to close

## Customization Options

### Add More Searchable Content:
Edit `src/utils/searchData.ts`:
```typescript
{
  id: "unique-id",
  title: "Your Content Title",
  description: "Description of your content",
  path: "/your-path",
  category: "Category Name",
  keywords: ["keyword1", "keyword2", "keyword3"]
}
```

### Adjust Search Result Limit:
In `src/utils/searchData.ts`, change the `.slice(0, 8)` parameter to show more/fewer results

### Customize Colors:
- Search input styling in `Header.tsx`
- Results modal styling in `SearchResults.tsx`

## Features Highlights

✅ Real-time search as you type  
✅ Navbar options hide during search  
✅ Smooth animations and transitions  
✅ Fully responsive (mobile, tablet, desktop)  
✅ Fuzzy search with relevance scoring  
✅ Easy to add more searchable content  
✅ Auto-focus search input  
✅ Click outside to close  
✅ Keyboard accessible  
✅ Beautiful UI with hover effects  

## Testing Checklist

- [ ] Click search icon - input appears with animation
- [ ] Type keywords - results appear instantly
- [ ] Navbar options hidden during search
- [ ] Click on result - navigates to correct page
- [ ] Click X button - closes search
- [ ] Click outside modal - closes search
- [ ] Mobile view - search functions correctly
- [ ] Tablet view - search functions correctly
- [ ] Desktop view - search functions correctly
- [ ] Empty search - no results shown
- [ ] Type again after close - works normally
