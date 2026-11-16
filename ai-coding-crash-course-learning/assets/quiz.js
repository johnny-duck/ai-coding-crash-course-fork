/*
 * Reusable quiz component.
 * Markup:
 *   <div class="quiz">
 *     <div class="q" data-answer="2">            // 0-based index of the right option
 *       <p>Question?</p>
 *       <div class="opts">
 *         <button class="opt" data-why="Why this is wrong/right">Option</button>
 *         ...
 *       </div>
 *     </div>
 *   </div>
 *   <p class="quiz-score"></p>   (optional, anywhere on the page)
 * The first click is final, so the user commits to a recall attempt instead of guessing.
 */
(function () {
  function init() {
    const qs = document.querySelectorAll(".quiz .q");
    const scoreEl = document.querySelector(".quiz-score");
    let answered = 0, correct = 0;
    const update = () => {
      if (scoreEl) scoreEl.textContent = `Score: ${correct} / ${answered} answered (of ${qs.length})`;
    };
    qs.forEach((q) => {
      const answer = Number(q.dataset.answer);
      const opts = [...q.querySelectorAll("button.opt")];
      let fb = q.querySelector(".fb");
      if (!fb) { fb = document.createElement("p"); fb.className = "fb"; q.appendChild(fb); }
      opts.forEach((btn, i) => {
        btn.type = "button";
        btn.addEventListener("click", () => {
          opts.forEach((b) => (b.disabled = true));
          const ok = i === answer;
          btn.classList.add(ok ? "right" : "wrong");
          if (!ok) opts[answer].classList.add("right");
          answered++; if (ok) correct++;
          fb.className = "fb " + (ok ? "right" : "wrong");
          fb.textContent = (ok ? "✓ Correct. " : "✗ Not quite. ") + (opts[answer].dataset.why || "");
          update();
        });
      });
    });
    update();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
