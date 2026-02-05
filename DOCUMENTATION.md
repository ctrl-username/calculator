# Calculator GUI - Documentation

## Project Overview
This is a calculator application with a graphical user interface built using HTML, CSS, and JavaScript. The project implements a standard calculator with a numeric keypad, arithmetic operations, and a display screen.

---

## File Structure

### `index.html`
The main markup file that defines the calculator's structure and layout.

**Key Components:**
- **Document Setup**: Standard HTML5 structure with UTF-8 encoding and responsive viewport meta tag
- **Title**: "Calculator GUI"
- **Stylesheet**: Links to `index.css` for styling

**HTML Structure:**
```
body
├── container (div)
│   └── calculator-body (div)
│       ├── input (number field) - Display screen
│       └── keypad (div)
│           └── buttons (20 total)
```

**Display Screen:**
- Input field of type `number` with right-to-left text direction (`dir="rtl"`)
- Default value: "0898339"

**Keypad Buttons (20 total):**

| Button | ID | Function |
|--------|----|---------:|
| C | c | Clear all |
| CE | CE | Clear entry |
| % | modulus | Modulus operation |
| X | multiply | Multiplication |
| 7-9 | seven, eight, nine | Number input |
| / | divide | Division |
| 4-6 | four, five, six | Number input |
| - | minus | Subtraction |
| 1-3 | one, two, three | Number input |
| + | plus | Addition |
| 0 | zero | Zero input |
| 00 | dzero | Double zero input |
| . | period | Decimal point |
| = | equal | Calculate result |

---

### `index.css`
Stylesheet that defines the visual appearance and layout of the calculator.

**Global Styles:**
- **Body**: Font size set to 3.5rem

**Layout:**
- **Container**: Flexbox display with fixed width of 250px
- **Keypad**: Flex container with column direction and wrapping enabled

**Input Field Styling:**
- Height: 70px
- Width: 90%
- Margin: 5px
- Border radius: 9px
- Font size: 30px

**Button Styling:**
- Height: 50px
- Width: 50px
- Font family: Roboto
- Font size: 1rem
- Margin: 5px
- Border radius: 6px

---

## Layout Overview

The calculator follows a standard grid-like layout:

**Row 1 (Operators):** C | CE | % | ×
**Row 2 (Numbers):** 7 | 8 | 9 | ÷
**Row 3 (Numbers):** 4 | 5 | 6 | −
**Row 4 (Numbers):** 1 | 2 | 3 | +
**Row 5 (Special):** 0 | 00 | . | =

---

## Features

### Current Features
- ✓ Numeric keypad (0-9)
- ✓ Arithmetic operations (addition, subtraction, multiplication, division)
- ✓ Modulus operation
- ✓ Clear and Clear Entry buttons
- ✓ Decimal point support
- ✓ Double zero button for convenience
- ✓ Display screen with number input
- ✓ Responsive flexbox layout

### Implementation Notes
- The input field has `dir="rtl"` attribute, suggesting right-to-left text display orientation
- Button IDs are descriptive and map directly to their functions
- The layout uses flexbox for flexible and responsive design
- Fixed container width of 250px provides a compact calculator interface

---

## Styling Details

### Responsive Design
- Uses flexbox for flexible layout
- Buttons wrap automatically due to `flex-wrap: wrap`
- Consistent spacing with 5px margins throughout

### Color & Typography
- Font family for buttons: Roboto
- Font sizes: 3.5rem (body), 30px (input), 1rem (buttons)
- Rounded corners on all interactive elements (border-radius: 6-9px)

---

## Potential Improvements
1. Add color theming to distinguish operation types (operators vs. numbers)
2. Implement hover/active states for better UX feedback
3. Add keyboard event handling in JavaScript
4. Implement calculator logic functionality
5. Consider accessibility features (ARIA labels, keyboard navigation)
6. Add box shadows or 3D effects for button depth
7. Implement display screen background color for better contrast

---

## Dependencies
- **Font**: Roboto (referenced but not explicitly imported; should add Google Fonts link)

---

## Next Steps
To complete the calculator:
1. Implement JavaScript logic for all operations
2. Add event listeners to buttons
3. Handle calculation logic and result display
4. Add keyboard support
5. Implement state management for current operation, previous value, and display
