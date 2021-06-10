/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author sebas
 */
public class ActualizarProductos extends HttpServlet {

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
        String url = "jdbc:mysql:3307//localhost/registro4iv7";
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
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet actualizar</title>");            
            out.println("</head>");
            out.println("<body>");
            
            int id, edad;
            String nom;
            id = Integer.parseInt(request.getParameter("idactualizar"));
            nom=request.getParameter("nombreactualizar");
            
            edad = Integer.parseInt(request.getParameter("edadactualizar"));
            
            
            /*
            para poder eliminar es 
            delete from nombretabla where atributo (condicion) valor
            */
        
            String q = "UPDATE Mproductos SET nom_pru = '"+nom+"', pre_pru= "+edad+" WHERE id_pru = "+id+";";
            try{
                
                set.executeUpdate(q);
                System.out.println("Registro eliminado con exito");
                
                out.println("<h1>Registro Actualizado</h1>");
            }catch(Exception e){
                out.println("<h1>Registro No Actualizado, sucedio un error</h1>");
                System.out.println("Error al actualizar el registro");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            
            }

            out.println("<a href='index.html'>Regresar al Formulario</a>"
                    + "<br>"
                    
                    + "<br>"
                    + "<a href='ContultarProductos'>Consultar la Tabla General de Productos</a>");
            out.println("</body>");
            out.println("</html>");
        }
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
        processRequest(request, response);
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
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    public void destroy(){
        try{
            con.close();
        
        }catch(Exception e){
            super.destroy();
        
        }
    }
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
