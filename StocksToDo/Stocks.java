import java.io.*;

import javax.net.ssl.HttpsURLConnection;

import java.lang.reflect.Type;
import java.net.*;
import com.google.gson.*;
import org.codehaus.jackson.*;
import org.codehaus.jackson.map.*;
import org.codehaus.jackson.node.*;
public class Stocks {
	    public static void main(String[] args) {
	        HttpsURLConnection connection = null, connection2 = null;
	        OutputStreamWriter writer = null;
	        try {
	String stock = args[0];

	String link = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+stock+"%22)&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env";

	            URL url = new URL("https://agent8-backend-staging.appspot.com/hackathon/discovery/postTask");

	            URL url2 = new URL(link);
	            connection = (HttpsURLConnection) url.openConnection();
	            connection2 = (HttpsURLConnection) url2.openConnection();
	            
		boolean profit = true;
	    	 ObjectMapper mapper = new ObjectMapper(new JsonFactory());
	            JsonNode root = mapper.readTree(connection2.getInputStream());
	            JsonNode value= root.findValue("LastTradePriceOnly");
	            System.out.println("Price = " + value.asText());
		JsonNode pc = root.findValue("PercentChange");
			String pcs = pc.asText(); double pcd = Double.parseDouble((pcs.substring(1, pcs.length()-1)));if (pcs.charAt	(0)=='-')profit = false;
			System.out.println("Percent Change = " + pcd);JsonNode pc5 = root.findValue("PercentChangeFromFiftydayMovingAverage");
			String pc5s = pc5.asText(); double pc5d = Double.parseDouble((pc5s.substring(1, pc5s.length()-1)));
			System.out.println("Percent Change over Past Few Weeks= " + pc5d);
			System.out.println(pcd/pc5d);
			String verdict="There hasn't been a big change.";
			if (pcd/pc5d>1.25||pcd/pc5d<0.75)
				verdict = "If I were you, I would check RIGHT NOW!";


String advice = "Well, you ";
double c = 1.0;
if (profit){
	advice+="gained ";
	c+= pcd*.01;
}else{
	advice+="lost ";
	c-= pcd*.01;
}
double money = c*Integer.parseInt(args[1]);

advice += String.format("$%.2f", money);
advice += " dollars over the course of a day. You're dealing with"; 
if(Integer.parseInt(args[1])>1000)
	advice+=" thousands of stocks. I would be careful if I were you.";
else if (Integer.parseInt(args[1])>100&&profit)
	advice+=" hundreds of stocks. Maybe, just maybe, you should invest a lot more money. More money = more return.";
else if (Integer.parseInt(args[1])>100&&!profit)
	advice+=" hundreds of stocks. Don't be put down, you don't own too many shares of htis company.";
else
	advice+="... wait, you're not dealing with a lot of stocks. Get more stocks and we'll start talking.";

	            JsonObject top = new JsonObject();

	            connection.setDoOutput(true);
	            connection.setRequestMethod("POST");
	            
	            top.addProperty("doType", 5414); // ID of Trigger in EasilyDo Builder
	            
	            JsonObject doRes = new JsonObject();
	            doRes.addProperty("userName", "dhruhin@gmail.com"); // EasilyDo user name
	            doRes.addProperty("uniqueId", (int)(Math.random()*9999999)+""); // Make this a random string to uniquely identify task
	            JsonObject variables = new JsonObject();
	            
	            variables.addProperty("stock1", args[0]);
	            variables.addProperty("initial1", args[1]);
			variables.addProperty("news",readRSS("http://articlefeeds.nasdaq.com/nasdaq/symbols?symbol="+args[0]));
			variables.addProperty("change", verdict);
			variables.addProperty("value", value.asText());
			variables.addProperty("recommendation", advice);
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
	    
		public static String getStringFromStream(InputStream is) {
			if (is == null) {
				return null;
			}
	        Writer writer = new StringWriter();
	        char[] buffer = new char[1024];

	        Reader reader = null;
	        try {
	            reader = new InputStreamReader(is, "UTF-8");

	            int n;
	            while ((n = reader.read(buffer)) != -1) {
	                writer.write(buffer, 0, n);
	            }
	        } catch (IOException ioe) {
	        	ioe.printStackTrace();
	        } finally {
	        	try {
	        		is.close();
	        		if (reader != null) { reader.close();}
	        	} catch (IOException ioe) {
	        		ioe.printStackTrace();
	        	}
	        }
	        return writer.toString();
		}
	    
		public static String readRSS(String urlAddress){
		try{
		URL rssUrl = new URL(urlAddress);
		BufferedReader in = new BufferedReader(new InputStreamReader(rssUrl.openStream()));
		String sourceCode = "";
		String line;
		while ((line=in.readLine())!=null){
			if(line.contains("<title>")){
			int firstPos = line.indexOf("<title>");
			String temp = line.substring(firstPos);
			temp = temp.replace("<title>", "");
			int lastPos = temp.indexOf("</title>");
			temp = temp.substring (0, lastPos);
			sourceCode += temp + "\n";
			}
		}
		in.close();
		return sourceCode;
		} catch (MalformedURLException ue){
			System.out.println("Malformed URL");
		} catch (IOException joe) {
			System.out.println("The contents cannot display the information properly. We apologize for this inconvenience.");
		
		}return "";
	}
}