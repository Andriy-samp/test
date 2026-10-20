document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.quiz-card');

    cards.forEach(card => {
        const buttons = card.querySelectorAll('.option-btn');
        const feedback = card.querySelector('.feedback-text');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.disabled = true);

                const isCorrect = button.getAttribute('data-correct') === 'true';

                if (isCorrect) {
                    button.classList.add('correct');
                    feedback.textContent = '🎉 Правильно!';
                    feedback.style.color = '#22c55e';
                } else {
                    button.classList.add('wrong');
                    feedback.textContent = '❌ Неправильно, спробуйте ще раз в іншому тесті!';
                    feedback.style.color = '#ef4444';

                    buttons.forEach(btn => {
                        if (btn.getAttribute('data-correct') === 'true') {
                            btn.classList.add('correct');
                        }
                    });
                }
            });
        });
    });
});
