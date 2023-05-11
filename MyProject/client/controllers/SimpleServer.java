/*
*Чтобы этот код работал и не ругался, нужны следующие jar:
*Java-WebSocket-1.5.2.jar
*logback-classic-1.2.3.jar
*logback-core-1.2.3.jar
*slf4j-api-1.7.25.jar
*Пока ложу их сюда:
*  /usr/lib/jvm/java-8-openjdk-amd64/jre/lib/ext/
*/

/*
30.12.2021
разобрался как скомпилировать и запустить эту программу с библиотеками в домашнем каталоге
структура:
корневая папка:
SimpleServer.java
bin(папка с библиотеками *.jar)
для компиляции в корневой папке даем команду:
javac -cp "./:./lib/*" SimpleServer.java
для запуска в корневой папке даем команду:
java -cp "./:./lib/*" SimpleServer
*/

import java.io.*;
import java.util.Properties;

import java.net.InetSocketAddress;

import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;
/*
*Каждое применение conn.send или message в методе onMessage требует проверки состояния соединения if(conn.getReadyState() == ReadyState.OPEN)
*Для этого понадобился следующий импорт.
*/
import org.java_websocket.enums.ReadyState;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import net.ucanaccess.converters.TypesMap.AccessType;
import net.ucanaccess.ext.FunctionType;
import net.ucanaccess.jdbc.UcanaccessConnection;
import net.ucanaccess.jdbc.UcanaccessDriver;

import java.nio.charset.Charset; 

import org.json.*;
/*
org.json.CDL.class
org.json.Cookie.class
org.json.CookieList.class
org.json.HTTP.class
org.json.HTTPTokener.class
org.json.JSONArray.class
org.json.JSONException.class
org.json.JSONML.class
org.json.JSONObject.class
org.json.JSONString.class
org.json.JSONStringer.class
org.json.JSONTokener.class
org.json.JSONWriter.class
org.json.Test.class
org.json.XML.class
org.json.XMLTokener.class
*/

import java.util.Iterator;

public class SimpleServer extends WebSocketServer {

    public static String location;
    
    public SimpleServer(InetSocketAddress address){
        super(address);
    }

    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake) {
        System.out.println("Новое подключение: " + conn.getRemoteSocketAddress());
        //conn.send("Привет!");
    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        System.out.println("Подключенние " + conn.getRemoteSocketAddress() + " закрыто. Код выхода: " + code + ". Дополнительная информация: " + reason);
        if(code == 1001){
            System.out.println("Stop server");
            conn.close(0);
            //System.exit(0);
        }
    }

    @Override
    public void onMessage(WebSocket conn, String message) {
        if(conn.getReadyState() == ReadyState.OPEN) {
            System.out.println("Получено сообщение: " + message);
            String[] msg0 = message.split(";");
            String[] msg = msg0[4].split(" ");
            try {
                Connection conndb = DriverManager.getConnection(UcanaccessDriver.URL_PREFIX + System.getenv("HOME") + location + ";newDatabaseVersion=V2003");
                Statement stmt = conndb.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY); //ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE
                
                //JSONObject add
                
                //JSONParser parser = new JSONParser();
                //Object obj = parser.parse(message);
                //JSONObject jsonObj = (JSONObject) obj;
                //String jsonStr = "{" + "name":"Nathan","age":22,"hasId":true}";
                    
                    
                    
                
                JSONObject jsonObj = new JSONObject(message);
                System.out.println(jsonObj.getString("name"));
                JSONObject objToSend = new JSONObject();
                JSONObject options = new JSONObject();
                options.put("RequestHeader",msg0[0]);
                options.put("ElementID",msg0[1]);
                options.put("Option1",msg0[2]);
                options.put("Option2",msg0[3]);
                
                //формат для message [тип элемента или запроса; id html-элемента; лейбл для optgroup в select; резерв; sql-запрос]
                
                //System.out.println(msg0[0]);
                ////System.out.println(msg0[1]);
                //System.out.println(msg0[2]);
                System.out.println("Тип сообщения: " + msg[0]);
                switch (msg[0]) {
                    case "SELECT":
                        System.out.println("case SELECT");
                        ResultSet rs = stmt.executeQuery(msg0[4]);
                        String strToSend = "";
                        //System.out.println(rs.getRow());
                        if(rs.next()){
                            rs.beforeFirst();
                            strToSend = msg0[0] + ";" + msg0[1] + ";" + msg0[2] + ";" + msg0[3] + ";done|";
                            int j = rs.getMetaData().getColumnCount();

                            //JSONObject create
                            options.put("Status","done");
                            objToSend.put("options",options);
                            //System.out.print(objToSend.toString());
                            String[] headers = new String[j];
                            for (int i = 1; i <= j ; ++i) {
                                headers[i-1] = rs.getMetaData().getColumnLabel(i);                    
                            }
                            objToSend.put("headers",headers);
                            int rsSize = 0;
                            while (rs.next()) {
                                rsSize++;
                            }
                            rs.beforeFirst();
                            Object[] rsDt = new Object[rsSize];
                            rsSize = 0;
                            while (rs.next()) {
                                JSONObject dtItem = new JSONObject();
                                for (int i = 1; i <= j ; ++i) {
                                    String rsst = rs.getString(i);
                                    if(rsst == null){rsst = "";};
                                    dtItem.put(rs.getMetaData().getColumnLabel(i),rsst);
                                }
                                rsDt[rsSize] = dtItem;
                                rsSize++;
                            }
                            objToSend.put("data",rsDt);
                            //System.out.print(objToSend.toString());
                            rs.beforeFirst();
                            
                            while (rs.next()) {
                                for (int i = 1; i <= j ; ++i) {
                                    String rsData = rs.getString(i);
                                    if(rsData == null){rsData = "";}
                                    if(i == j){strToSend = strToSend + rsData + "|";}
                                    else{strToSend = strToSend + rsData + ";";}
                                }
                            }
                            strToSend = strToSend.substring(0, strToSend.length() - 1);
                        } else {
                            strToSend = msg0[0] + ";" + msg0[1] + ";" + msg0[2] + ";" + msg0[3] + ";error";
                            
                            options.put("Status","error");
                            objToSend.put("options",options);
                        }
                        System.out.println("Ответ на запрос SELECT: *** " + strToSend + " ***");
                        //conn.send(strToSend);

                        //JSONObject send
                        conn.send(objToSend.toString());

                        //conn.send(strToSend);
                        break;
                    case "USER":
                        System.out.println("case USER");
                        String user = System.getProperty("user.name").split("@")[0];
                        System.out.println("user : " + user);
                        //String[] userarr = user.split("@");
                        //user = userarr[0];
                        String uExecuteQueryStr = "SELECT Admin FROM Admins WHERE Login = '" + user + "'";
                        System.out.println("Запрос USER" + uExecuteQueryStr);
                        ResultSet urs = stmt.executeQuery(uExecuteQueryStr);
                        String uStrToSend = "user;";
                        if(urs.next()){
                            uStrToSend = uStrToSend + "true||" + urs.getString(1);
                            options.put("Status",urs.getString(1));
                        } else {
                            uStrToSend = uStrToSend + "false||авторизация не пройдена.";
                            options.put("Status","error");
                        }
                        objToSend.put("options",options);
                        System.out.println("Ответ на запрос USER" + uStrToSend);                        
                        conn.send(objToSend.toString());
                        break;
                    case "INSERT":
                        System.out.println("case INSERT " + msg0[0] + ";" + msg0[1] + ";" + msg0[2] + ";" + msg0[3]);
                        conn.send(objToSend.toString()); //msg0[0] + ";" + msg0[1] + ";" + msg0[2] + ";" + msg0[3]);
                        stmt.executeUpdate(msg0[4]);
                        break;
                    default:
                        System.out.println("case default");
                        System.out.println(msg0[4]);
                        stmt.executeUpdate(msg0[4]);
                        break;                    
                }
                if (stmt != null)stmt.close();
            } catch (SQLException e) {
                //conn.send(msg0[0] + ";" + msg0[1] + ";" + msg0[2] + ";" + msg0[3] + ";error|Ошибка обращения к базе данных!");
                e.printStackTrace();
            //} catch (ParseException e) {
            //    e.printStackTrace();
            } catch (JSONException e) {
                e.printStackTrace();
            }

        }
    }

    @Override
    public void onError(WebSocket conn, Exception ex) {
        System.err.println("Произошла ошибка при подключении к " + conn.getRemoteSocketAddress()  + ": " + ex);
        //conn.close();
    }

    @Override
    public void onStart() {
        System.out.println("Сервер запущен!");
        //setConnectionLostTimeout(100);
    }
    
    public static void main(String[] args) throws InterruptedException {

        FileInputStream fini;
        Properties property = new Properties();

        try {
            //fini = new FileInputStream("E:/ats/ATS-DB/server/config.ini");
            String fpath = SimpleServer.class.getResource("config.ini").toString();
            //String osname = System.getProperty("os.name");
            //System.out.println(osname);
            //if(osname == "Linux") {
                fpath = fpath.substring(fpath.indexOf(':')+1);
            //} else {
                //fpath = fpath.substring(fpath.indexOf('/')+1);
            //};
            //System.out.println("Путь к папке HOME : " + System.getenv("HOME"));
            System.out.println("Путь к файлу настроек: " + fpath);
            fini = new FileInputStream(fpath);
            property.load(new InputStreamReader(fini, Charset.forName("UTF-8")));
            String host = property.getProperty("server.host");
            String sport = property.getProperty("server.port");
            int port = Integer.parseInt(sport);
            location = property.getProperty("db.location");

            System.out.println("Адрес сервера: " + host
                            + ",\nПорт сервера: " + port
                            + ",\nФайл базы данных расположен по адресу: " + location);
            
            WebSocketServer server = new SimpleServer(new InetSocketAddress(host, port));
            server.run();
            
    
        } catch (IOException e) {
            System.err.println("ОШИБКА: Файл настроек недоступен!");
        }
    }
}
