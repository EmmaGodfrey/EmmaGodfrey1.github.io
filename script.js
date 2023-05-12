$(document).ready(function() {
    const pickButton = $('#pick-random-date');
    const dateFormContainer = $('#date-form-container');
    const dateForm = $('#date-form');
    const dateIdeaInput = $('#date-idea');
    const emojisContainer = $('#emojis-container');
    const outdoorsEmoji = $('#outdoors-emoji');
    const indoorsEmoji = $('#indoors-emoji');
    const outgoingEmoji = $('#outgoing-emoji');
    const sexualEmoji = $('#sexual-emoji');
    const gamingEmoji = $('#gaming-emoji');
    const readingEmoji = $('#reading-emoji');
  
    function loadDateIdeas() {
      $.ajax({
        url: 'date_ideas.csv',
        dataType: 'text',
        success: function(data) {
          const rows = data.split('\n');
          const randomIndex = Math.floor(Math.random() * rows.length);
          const randomDateIdea = rows[randomIndex].trim();
  
          dateIdeaInput.val(randomDateIdea);
  
          // Show the form container and corresponding emojis based on the type of date
          dateFormContainer.show();
          emojisContainer.show();
  
          // Determine the type of date and display the corresponding emoji
          if (randomDateIdea.includes('Outdoors')) {
            outdoorsEmoji.show();
            indoorsEmoji.hide();
            outgoingEmoji.hide();
            sexualEmoji.hide();
            gamingEmoji.hide();
            readingEmoji.hide();
          } else if (randomDateIdea.includes('Indoors')) {
            outdoorsEmoji.hide();
            indoorsEmoji.show();
            outgoingEmoji.hide();
            sexualEmoji.hide();
            gamingEmoji.hide();
            readingEmoji.hide();
          } else if (randomDateIdea.includes('Outgoing')) {
            outdoorsEmoji.hide();
            indoorsEmoji.hide();
            outgoingEmoji.show();
            sexualEmoji.hide();
            gamingEmoji.hide();
            readingEmoji.hide();
          } else if (randomDateIdea.includes('Sexual')) {
            outdoorsEmoji.hide();
            indoorsEmoji.hide();
            outgoingEmoji.hide();
            sexualEmoji.show();
            gamingEmoji.hide();
            readingEmoji.hide();
          } else if (randomDateIdea.includes('Gaming')) {
            outdoorsEmoji.hide();
            indoorsEmoji.hide();
            outgoingEmoji.hide();
            sexualEmoji.hide();
            gamingEmoji.show();
            readingEmoji.hide();
          } else if (randomDateIdea.includes('Reading')) {
            outdoorsEmoji.hide();
            indoorsEmoji.hide();
            outgoingEmoji.hide();
            sexualEmoji.hide();
            gamingEmoji.hide();
            readingEmoji.show();
          } else {
            // If the date type is not specified or recognized, hide all emojis
            emojisContainer.hide();
          }
        },
        error: function(error) {
          console.error('Error:', error);
        }
      });
    }
  
    pickButton.click(function() {
      loadDateIdeas();
    });
  });
  
           
  
  
  