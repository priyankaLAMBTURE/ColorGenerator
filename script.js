let index = 0;

      let isCopied = true

      function changeColors() {

       

        const colors = ['	#FFB3BA', '#C9C9FF', '	#FFFFBA', '#BAFFC9', '#BAE1FF' ];

        document.body.querySelector('.container').style.backgroundColor = colors[index++];

        if (index > colors.length - 1) {
          index = 0;
        }

        document.body.getElementsByTagName('p')[0].innerHTML = colors[index];

        document.body.querySelector('.copy-button').innerHTML = isCopied ? 'Copy' : 'Copied';


    
      }

      function copyCode () {
        const colorCode = document.body.getElementsByTagName('p')[0].innerHTML 
        navigator.clipboard.writeText(colorCode.toUpperCase());
        document.body.querySelector('.copy-button').innerHTML = 'Copied';
      }

      changeColors();