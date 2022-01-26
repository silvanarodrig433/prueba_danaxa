<template>
<div>
    <div>
        <div>
            
        <p id="toolId" class="name_tool">Chosen Tool: {{radio}}</p>
        </div>
        <section class="container">
            <div class="app-paper">
            <form>

                
                <input id="hand-btn" type="radio" value="Select Mode" name="tool" v-model="radio" checked>
                <label for="hand-btn" class="drinkcard-cc hand"></label><br>
                
                <input id="cut-btn" accesskey="c" type="radio" value="Cut" name="tool" v-model="radio">
                <label for="cut-btn" class="drinkcard-cc cut"></label><br>
                <input id="pencil-btn" accesskey="n" type="radio" value="Pencil" name="tool" v-model="radio">
                <label for="pencil-btn" class="drinkcard-cc pencil"></label><br>
                <input id="magic-btn" accesskey="m" type="radio" value="Magic Wand" name="tool" v-model="radio">
                <label for="magic-btn" class="drinkcard-cc magic"></label><br>
                <input id="brush-btn" accesskey="b" type="radio" value="Brush" name="tool" v-model="radio">
                <label for="brush-btn" class="drinkcard-cc brush"></label><br>
                <input id="erase-btn" accesskey="e" type="radio" value="Erase" name="tool" v-model="radio">
                <label for="erase-btn" class="drinkcard-cc erase"></label><br>
                <input id="pin-btn" accesskey="g" type="radio" value="Pin" name="tool" v-model="radio">
                <label for="pin-btn" class="drinkcard-cc pin"></label><br>

            </form>
            
            </div>       
        </section>
        
    </div>
    <div class="shortKeys">
                <p>Hand: Esc</p>
                <p>Cut: Alt + C</p>
                <p>Pencil: Alt + N</p>
                <p>Magic Wand: Alt + M</p>
                <p>Brush: Alt + B</p>
                <p>Erase: Alt + E</p>
                <p>Pin: Alt + G</p>
    </div>

</div>
</template>

<script>
export default {
  name: 'ToolBar',
  data(){
      return{
          radio: null,
          botones:[
              {
                "name": "Cut",
                "icon": "cut",
                "shortKey": "1"
            },
            {
                "name": "Pencil",
                "icon": "pencil",
                "shortKey": "2"
            },
            {
                "name": "Magic",
                "icon": "magic",
                "shortKey": "3"
            },
            {
                "name": "Brush",
                "icon": "brush",
                "shortKey": "3"
            },
            {
                "name": "Erase",
                "icon": "erase",
                "shortKey": "4"
            },
            {
                "name": "Pin",
                "icon": "pin",
                "shortKey": "5"
            },
            {
                "name": "Default",
                "icon": "default",
                "shortKey": "6"
            }
          ]

      }
  }
}


document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  var letra = 'tecla oprimida ' + keyName;
  console.log(letra);

  if(keyName == 'Escape'){
      console.log("Mano seleccionada");
      document.getElementById("hand-btn").checked = "checked";
      document.getElementById("toolId").innerHTML = "Chosen Tool: Hand";
  }
});

</script>



<style scoped>

.hand{background-image:url(https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Touch-Finger-Tap-Hand-256.png);}
.cut{background-image:url(https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_crop_48px-512.png);}
.pencil{background-image:url(https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-16-256.png);}
.magic{background-image:url(https://cdn3.iconfinder.com/data/icons/design-tools-photo-editing-fat-line-vol-2/16/magic-wand-tool-design-256.png);}
.brush{background-image:url(https://cdn4.iconfinder.com/data/icons/48-bubbles/48/17.Brush-256.png);}
.erase{background-image:url(https://cdn1.iconfinder.com/data/icons/complete-common-version-4-5/1024/eraser8-256.png);}
.pin{background-image:url(https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/map-marker-256.png);}

.main{
    background-color: darksalmon;
}
.container{
    position: absolute;
    padding: 15px;
    border: 2px solid #01cc65;
    background-color: #01cc65;
    border-radius: 5px;
}
.tool_name{
    position: absolute;
    left: 50px;
}

input[type="radio"]{
    display: none;
}

label{
    position: relative;
    color: #01cc65;
    font-family: sans-serif;
    font-size: 25px;
    border: 2px solid #01cc65;
    border-radius: 5px;
    padding: 15px 15px;
    cursor: pointer;
    display: flex;
}

input[type="radio"]:checked + label{
    background-color: white;
}

.drinkcard-cc{
    background-size: 100%;
    background-repeat:no-repeat;
    transition: all 100ms ease-in;
}
.name_tool{
    font-family: sans-serif;
    font-size: 20px;
    color: slategrey;
    font-style: bold;
}
.shortKeys{
    position: relative;
    width: 200px;
    margin-top: 20px;
    margin-left: 100px;
    font-family: sans-serif;
    border: 2px solid #01cc65;
    border-radius: 5px;
    text-align: center;

}

</style>