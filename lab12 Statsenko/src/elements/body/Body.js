

function Body() {
  return (
    <div>
      <p>
        Привет, мир!
      </p>
      <div id="container">
            <form id="container1_4">
                <input
                        type="button"
                    value="Задания 1-4"
                    class="elements"
                    onclick="Task_1_4()"
                />
                <label for="text1">Переменная var1</label>
                <input
                    type="text"
                    id="text1"
                    class="elements"
                />
                <label for="text2">Переменная var2</label>
                <input
                    type="text"
                    id="text2"
                    class="elements"
                />
                <label for="text3">Переменная var3</label>
                <input
                    type="text"
                    id="text3"
                    class="elements"
                />
                <label for="text4">Переменная var4</label>
                <input
                    type="text"
                    id="text4"
                    class="elements"
                />
            </form>


            <form id="container5">
                <input
                    type="button"
                    value="Задание 5"
                    class="elements"
                    onclick="Task5()"
                />
                <label for="textA">A = </label>
                <input
                    type="text"
                    id="textA"
                    class="elements"
                />
                <label for="textB">B = </label>
                <input
                    type="text"
                    id="textB"
                    class="elements"
                />
                <label for="textC">C = </label>
                <input
                    type="text"
                    id="textC"
                    class="elements"
                />
            </form>

            <form id="container6">
                <input
                    type="button"
                    value="Задание 6"
                    class="elements"
                    onclick="Task6()"
                />
                <label for="radiofor">
                    <input
                    type="radio"
                    id="radiofor"
                    name="loop"
                    value="for"
                    class="loop"
                    checked />
                    Вывод с помощью цикла for</label>

                <label for="radiowhile">
                    <input
                    type="radio"
                    id="radiowhile"
                    name="loop"
                    value="while"
                    class="loop"
                    checked />
                Вывод с помощью цикла while</label>

                <label for="radiodowhile">
                    <input
                    type="radio"
                    id="radiodowhile"
                    name="loop"
                    value="dowhile"
                    class="loop"
                    checked />
                Вывод с помощью цикла do-while</label>

                <label for="textfor">Вывод с помощью цикла for</label>
                <input
                    type="text"
                    id="textfor"
                    class="elements"
                />
                <label for="textwhile">Вывод с помощью цикла while</label>
                <input
                    type="text"
                    id="textwhile"
                    class="elements"
                />
                <label for="textdowhile">Вывод с помощью цикла do-while</label>
                <input
                    type="text"
                    id="textdowhile"
                    class="elements"
                />
            </form>

            <form id="container7">
                <input
                    type="button"
                    value="Задание 7"
                    class="elements"
                    onclick="Task7()"
                />
                <select id="weather">
                    <option>Солнечная</option>
                    <option>Дождливая</option>
                    <option>Снежная</option>
                </select>
            </form>
               
        </div>
    </div>
    
    
  );
}

export default Body;
