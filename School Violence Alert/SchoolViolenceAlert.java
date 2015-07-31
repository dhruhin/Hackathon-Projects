import java.io.*;
import java.net.*;
import javax.net.ssl.HttpsURLConnection;
import java.util.*;
import com.google.gson.*;
import com.restfb.*;
import java.sql.Timestamp;
public class SchoolViolenceAlert{

    public static void main(String[] args) {
        HttpsURLConnection connection = null;
        OutputStreamWriter writer = null;
        try {
            URL url = new URL("https://agent8-backend-staging.appspot.com/hackathon/discovery/postTask");
            connection = (HttpsURLConnection) url.openConnection();
            connection.setDoOutput(true);
            connection.setRequestMethod("POST");
            
            JsonObject top = new JsonObject();
            top.addProperty("doType", 5437); // ID of Trigger in EasilyDo Builder
            
            JsonObject doRes = new JsonObject();
            doRes.addProperty("userName", "dhruhin@gmail.com"); // EasilyDo user name
            doRes.addProperty("uniqueId", (int)(Math.random()*9999999)+""); // Make this a random string to uniquely identify task
            JsonObject variables = new JsonObject();
            
long original =  System.currentTimeMillis()/1000;
long later =  System.currentTimeMillis()/1000 - 6000*3;
DefaultFacebookClient fbClient = new DefaultFacebookClient("BAADj6uZBY8NIBAFAGoDdG7a6XYH6UYYM1JoeZBYWgCLU1vYE9Y94zmpAaPQS0Jc8qbfDh4FABwzZBwZCFNII3PGAbQFkTkWztksO0WF6ZAUdKVYP5ogT3BWtVqyfHTcEZD");

List<com.restfb.json.JsonObject> posts = fbClient.executeQuery("SELECT post_id, message, comments.count\n"+ "FROM stream "+ 
 "WHERE source_id in(SELECT uid2 FROM friend WHERE uid1 = me()) AND created_time >= "+later+" LIMIT 25", com.restfb.json.JsonObject.class);

List<String> selected = new ArrayList <String>();
for (com.restfb.json.JsonObject a: posts){
	com.restfb.types.Post p = fbClient.fetchObject(a.getString("post_id"), com.restfb.types.Post.class);
	String d = a.getString("message");
	if(d.contains("bomb")||d.contains("violence")||d.contains("violent")||d.contains("no school")||d.contains("threat")||d.contains("danger"))
		selected.add((String)(p.getFrom().getName()+" says \""+a.getString("message")+"\" on "+p.getCreatedTime().toString()+""));
}
String str = "";
for(String a: selected)
str += a+"\n\n";
variables.addProperty("message", str);
variables.addProperty("time", 1361000590);
            variables.addProperty("AuthorID", 12093109);
            variables.addProperty("ImageID", 1361000590); variables.addProperty("author", "Dhruhin");
            variables.addProperty("postID", 1361000590);
            variables.addProperty("comments", "...");
variables.addProperty("count", ""+selected.size());
            doRes.add("variables", variables);
            JsonArray doResList = new JsonArray();
            doResList.add(doRes);
            top.add("doResponse", doResList);
            
            String postTaskStr = new Gson().toJson(top);
            writer = new OutputStreamWriter(connection.getOutputStream());
            writer.write(postTaskStr);
            writer.close();

            System.out.println("Posted Task json = " + postTaskStr);
            System.out.println("Response code = " + connection.getResponseCode());
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException ioe) {}
            }
            if (connection != null) {
                connection.disconnect();
            }
        }
    }
}