


quick_draw_data_set=["ship","aeroplane","clock","ambulance","birds","ant","apple","hand","pen","axe","bag","banana","bandage","house","ball","bat","basket","bird","tub","teddy bear","bed","bee","belt","chair","cycle","duck","cake","book","tree","burger","fire","broom","elephant","circle","key","laptop","lamp","horse","bush","crown","camera","bus","calander","cup","crab","boat","butterfly","ear","lighthouse","fish","television","brush","skull","rabbit","pin","nose"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML = "sketch to be drawn: "+Element_of_array;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = Element_of_array;

function draw(){
    check_sketch();
    if(drawn_sketch == sketch){
        answer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "score: "+score;
    }
}

function  check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "timer: "+timer_counter;
    if(timer_counter>400){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");
    quick_draw_data_set=["ship","aeroplane","clock","ambulance","birds","ant","apple","hand","pen","axe","bag","banana","bandage","house","ball","bat","basket","bird","tub","teddy bear","bed","bee","belt","chair","cycle","duck","cake","book","tree","burger","fire","broom","elephant","circle","key","laptop","lamp","horse","bush","crown","camera","bus","calander","cup","crab","boat","butterfly","ear","lighthouse","fish","television","brush","skull","rabbit","pin","nose"];
    random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    Element_of_array = quick_draw_data_set[random_number];
    sketch = Element_of_array;
    document.getElementById("sketch_to_be_drawn").innerHTML ="sketch to be drawn: "+sketch; 
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}