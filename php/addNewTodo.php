<?php 
  if (isset($_POST['task-time'])) {
    $json = file_get_contents("../json/tasks.json");
    $json = json_decode($json, true);
    $new_task = array(
      "id"=>$json["total"] + 1, 
      "time"=>$_POST["task-time"], 
      "title"=>$_POST["task-title"], 
      "detail"=>$_POST["task-detail"],
      "status"=> "active"
    );
    array_push($json['task'], $new_task);
    $json["total"] += 1;
    $json["now"] += 1;
    $my_file = fopen("../json/tasks.json", "w");
    fwrite($my_file, json_encode($json));
    fclose($my_file);
    echo '{"id":"' . $json["total"] . '"}';
  }
    
?>