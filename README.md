# Numble!

Welcome to the **Numble!** (Wordle with Numbers) game! This is a web-based game where you try to guess a sequence of numbers within a limited number of attempts. It's built with modern web technologies for a fast and seamless user experience.

## 📝 Table of Contents

- About the Project
- Features
- Built With
- Getting Started

  - Prerequisites
  - Installation

- Usage

  - Gameplay Instructions

- Contributing
- License
- Acknowledgments

## 📖 About the Project

The Numble! is a fun and challenging game where players attempt to guess a secret sequence of numbers. The game provides feedback after each guess to help players deduce the correct sequence. It's inspired by classic code-breaking games like Wordle but with a numerical twist.

## ✨ Features

- **Interactive Gameplay**: Guess numbers using on-screen buttons or your keyboard.
- **Dynamic Feedback**: Receive color-coded hints after each guess.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.
- **Keyboard Support**: Use numbers 1-5, Enter, and Backspace for faster gameplay.
- **State Management**: Efficient state handling using Zustand for smooth performance.
- **Modern Styling**: Styled with Tailwind CSS for a sleek and modern look.

## 🛠 Built With

- Vite - Next Generation Frontend Tooling
- React - A JavaScript library for building user interfaces
- TypeScript - Typed JavaScript at Any Scale
- SWC - Speedy Web Compiler for faster builds
- Zustand - A small, fast, and scalable bearbones state-management solution
- Tailwind CSS - A utility-first CSS framework for rapid UI development
- pnpm - Fast, disk space efficient package manager

## 🏁 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (version 14 or above)

````bash
- npm install -g pnpm

### Installation
```bash
1.  git clone https://github.com/HessamSadeghi/Numble.git
2.  cd Numble
3.  pnpm install
4.  pnpm run dev
5.  Visit http://localhost:5173/ in your browser to see the game in action.

## 🎮 Usage

### Gameplay Instructions

1.  **Objective**: Guess the secret sequence of five unique numbers between 1 and 5.
2.  **Making a Guess**:

    - **On-Screen Buttons**: Click on the numbers 1 through 5 to input your guess.
    - **Keyboard Input**: Use the number keys (1-5) on your keyboard to input your guess.

3.  **Editing Your Guess**:

    - **Delete**: Use the Delete button or press Backspace on your keyboard to remove the last number entered.

4.  **Submitting Your Guess**:

    - **Submit**: Click the Submit button or press Enter on your keyboard to submit your guess.

5.  **Feedback**:

    - After submitting, each number in your guess will be marked with a color:

      - **Green (Correct)**: The number is correct and in the correct position.
      - **Yellow (Present)**: The number is correct but in the wrong position.
      - **Gray (Absent)**: The number is not in the sequence.

    - Use this feedback to refine your next guess.

6.  **Winning the Game**:

    - Correctly guess the entire sequence within five attempts to win the game.

7.  **Game Over**:

    - If you fail to guess the sequence in five attempts, the game is over.

8.  **Restarting**:

    - Refresh the page or implement a reset button to start a new game.

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute:

1.  **Fork the repository**
```bash
2.  git checkout -b feature/your-feature-name
3.  **Make your changes**
```bash
4.  git commit -m "Add your message"
```bash
5.  git push origin feature/your-feature-name
6.  **Open a Pull Request**

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Community** for the robust UI library.
- **Vite** for providing fast and efficient tooling.
- **Zustand** for simple and effective state management.
- **Tailwind CSS** for utility-first CSS that accelerates styling.
- **SWC** for blazing-fast compilation.
````
