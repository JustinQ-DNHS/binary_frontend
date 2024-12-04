---
layout: base
title: CipherHome
search_exclude: true
permalink: /cipherhome/
---

# 🔐 **Cipher Team**

> *"Unlocking secrets, one cipher at a time."*

<!-- Rules Button -->
<div style="display: flex; justify-content: center; margin-top: -50px; margin-left: 250px;">
    <button id="rulesButton" style="padding: 10px 20px; background-color: #ffce00; color: #27293d; border: none; border-radius: 5px; font-size: 1.2em; cursor: pointer;">
        📜 Click to View Rules
    </button>
</div>

<!-- Modal Structure -->
<div id="rulesModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); z-index: 1000; justify-content: center; align-items: center;">
    <div style="background-color: #00021D; padding: 20px; border-radius: 10px; width: 400px; color: #ffffff; position: relative;">
        <h2 style="margin-top: 0;">Rules of the Cipher Forum</h2>
        <ul>
            <li>Respect all members and their opinions.</li>
            <li>No spamming or irrelevant content!</li>
            <li>Stay on topic and keep discussions related to ciphers.</li>
            <li>Help others in the community when possible.</li>
            <li>No sharing answers to level!</li>
            <li>Have fun and enjoy decoding!</li>
        </ul>
        <button id="closeModal" style="padding: 5px 10px; background-color: #ff6b6b; color: #ffffff; border: none; border-radius: 5px; cursor: pointer; position: absolute; top: 10px; right: 10px;">✖️ Close</button>
    </div>
</div>

<!-- JavaScript to Handle Modal -->
<script>
    document.getElementById('rulesButton').onclick = function() {
        document.getElementById('rulesModal').style.display = 'flex';
    };

    document.getElementById('closeModal').onclick = function() {
        document.getElementById('rulesModal').style.display = 'none';
    };

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === document.getElementById('rulesModal')) {
            document.getElementById('rulesModal').style.display = 'none';
        }
    };
</script>


---

<div style="display: block; margin-left: auto; margin-right: auto;">
    <img src="https://pngimg.com/uploads/anonymous_mask/small/anonymous_mask_PNG23.png" alt="Cipher Background" />
</div>

### 🛠 Announcements 🛠
<div style="background-color: #27293d; padding: 20px; border-radius: 8px; border: 2px solid #ffce00; color: #e0e0e0;">
🔒 **Current Challenges**: Crack today’s cipher within the hour!  
🕒 **Next Update**: New challenge releases every hour!  
💡 **Hint**: Pay attention to every detail...
</div>

---


<div style="display: flex; justify-content: center; gap: 40px; padding: 20px;">
    <!-- Coding Tips Section -->


    <!-- Level Buttons Section -->
    <div style="flex: 2;">
        <!-- Level Buttons Container -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
            <!-- Add your level buttons here as shown in the original code for each level -->

        </div>
    </div>
</div>

---

## **Instructions**

1. **Level Up**: Solve challenges to progress.
2. **Adding Levels**: To add a level, copy any of the above blocks, change the details, and place it in the sequence.

---

## 🔗 Useful Links

- [Cipher Information](https://www.cryptogram.org/resource-area/solve-a-cipher/)
- [Cipher Resources](https://www.cryptogram.org/resource-area/solve-a-cipher/)
- [Community Forum](/flocker_frontend/share_and_care/cipherdiscussion)

---

**Stay Sharp, Cipher Specialist!** 🧩

---

## 📜 Level Progression 📜

### **Start Your Journey**  
> *"Every great decoder was once a beginner!"*

---

<div style="display: flex; justify-content: center; gap: 40px; padding: 20px;">
    <!-- Coding Tips Section -->
    <div style="flex: 1; max-width: 200px; background-color: #1e1f2b; padding: 15px; border-radius: 8px; color: #ffffff;">
        ### 🧠 Coding Tips
        - **Stay Curious**: Each cipher has a unique solution.
        - **Use Caesar Shift**: Try shifting letters to reveal patterns.
        - **Frequency Analysis**: Common letters may reveal clues.
    </div>
<div>
    <!-- Level Buttons Section -->
    <div style="flex: 2;">
        <!-- Level Buttons Container -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; width: 100%;">
          <!-- Level 1 Button -->
    </div>
<a href="/flocker_frontend/levelone/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #00FF00; color: #005500; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #a0d99a; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 1: Beginner 🌱</strong><br>
            🌐 Intro to basic ciphers.<br>
            💡 Start your journey.
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 2 Button -->
<a href="/flocker_frontend/leveltwo/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #00FFFF; color: #004466; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #8ecae6; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 2: Novice 💻</strong><br>
            ➡️ Decode harder puzzles.<br>
            📜 Rise up the ranks.
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 3 Button -->
<a href="/flocker_frontend/levelthree/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #FFA500; color: #664400; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #ffa500; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 3: Intermediate 🔐</strong><br>
            🧩 Tackle complex codes.<br>
            🎯 Sharpen your skills.
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 4 Button -->
<a href="/flocker_frontend/levelfour/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #FF0000; color: #550000; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #ff6961; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 4: Pro 🚀</strong><br>
            ➡️ Advanced encryption skills.<br>
            ⚔️ Join the elite!
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 5 Button -->
<a href="/flocker_frontend/levelfive/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #d3d3d3; color: #333333; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #0000FF; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 5: Expert ⚔️</strong><br>
            🏆 Master challenging codes.<br>
            🌌 Only for the skilled!
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 6 Button -->
<a href="/flocker_frontend/levelsix/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #008080; color: #003366; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #66b2ff; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 6: Master 🔥</strong><br>
            💥 Conquer supreme puzzles.<br>
            🏅 Rare skills required!
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 7 Button -->
<a href="/flocker_frontend/levelseven/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #FF00FF; color: #6d003b; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #bc5090; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 7: Grand-Master 🏅</strong><br>
            🎖️ Face ultimate codes.<br>
            🏆 Legends are made here.
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 8 Button -->
<a href="/flocker_frontend/leveleight/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #FFFF00; color: #a10000; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #e63946; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 8: Alpha 👑</strong><br>
            🌠 Beyond mastery.<br>
            💪 Enter cipher elite!
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 9 Button -->
<a href="/flocker_frontend/levelnine/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #FFC0CB; color: #4e4b9b; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #6a5acd; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 9: God ✨</strong><br>
            ☄️ Celestial cipher powers.<br>
            🌌 Only the chosen survive.
        </div>
        <div style="font-size: 2em; padding-left: 20px;">⬇️</div>
    </div>
</a>

<!-- Level 10 Button -->
<a href="/flocker_frontend/levelten/" style="text-decoration: none;">
    <div style="display: flex; align-items: center; background-color: #0a0a0a; color: #ffd700; width: 100%; padding: 20px; border-radius: 10px; border: 2px solid #FFFF00; text-align: left; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 1.2em;">
        <div style="flex-grow: 1;">
            <strong>Level 10: SIGMA 🌌</strong><br>
            🌟 Final cipher legend.<br>
            💥 Ultimate skill awaits.
        </div>
        <div style="font-size: 2em; padding-left: 20px;"></div>
    </div>
</a>
</div>   


</div>


<div style="flex: 0 0 200px; background-color: #1e1f2b; padding: 15px; border-radius: 8px; color: #ffffff;">
        ### 🔍 Cipher Tips
        - **Patterns Matter**: Look for repeating letter groups.
        - **Letter Pairings**: Some ciphers swap letters.
        - **Use Frequency Tools**: Online tools can help!
</div>