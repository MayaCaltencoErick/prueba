/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//de poder realizar la conexion con la bd
import java.sql.Connection;
import java.sql.DriverManager;
//de poder realizar las sentencias sql, create, insert, delete, drop, update, alter
import java.sql.Statement;
//de poder realizar las consultas a la bd
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletConfig;

/**
 *
 * @author sebas
 */
public class ContultarProductos extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //vamos a crear el metodo constructor
    
    public void init(ServletConfig cfg) throws ServletException{
        //para conectarnos con la bd
        String url = "jdbc:mysql:3306//localhost/registro4iv7";
                    //driver:gestorbd:puerto//IP/nombrebd
                    
        String userName = "root";
        String password = "nAruto.04S";
        
        try{
            
            Class.forName("com.mysql.jdbc.Driver");
            /*
            a veces el driver ya maneja por defecto el puerto de comunicacion
            es por ello que pueden mandar un error, en ese caso
            url = "jdbc:mysql://localhost/registro4iv7";
            */
            url = "jdbc:mysql://localhost/registro4iv7";
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            
            System.out.println("Se ha conectado a la BD");
        
        }catch(Exception e ){
            System.out.println("No se ha conectado a la BD");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        
        }
    }
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Consultar</title>"
                    + "<link>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Tabla General De productos</h1>");
            out.println("<table border='2'>"
                    + "<thead>"
                    + "<tr>"
                    + "<th>ID</th>"
                    + "<th>Nombre</th>"
                    + "<th>Precio cada 100 gramos</th>"
                    
                    + "</tr>"
                    + "</thead>"
                    + "<tbody>");
            try{
                
                String nom, q;
                int precio, id;
                
                q = "select * from mproductos";
                
                set = con.createStatement();
                rs = set.executeQuery(q);
                while(rs.next()){
                    id = rs.getInt("id_pru");
                    nom = rs.getString("nom_pru");
                    
                    precio = rs.getInt("pre_pru");
                    
                    out.println("<tr>"
                            + "<td>"+id+"</td>"
                            + "<td>"+nom+"</td>"
                            +"<td>"+precio+"</td>"
                
                            + "</tr>");
                }
                
                System.out.println("Consulta de productos exitosa");
                rs.close();
                set.close();
            
            }catch(Exception e){
                System.out.println("Error al consultar la tabla de productos");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                
            
            }
            
            
            out.println("</tbody>"
                    + "</table>"
                    + "<br>"
                    + "<a href='crudproductos.html'>Regresar al Formulario</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */   
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    
    public void destroy(){
        try{
            con.close();
        
        }catch(Exception e){
            super.destroy();
        
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
