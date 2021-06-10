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
import javax.servlet.ServletConfig;

/**
 *
 * @author sebas
 */
public class RegistroPromociones extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            //manipular los datos del formulario
            String nom, fechai, fechaf;
            
            
            
            
            
            
            nom = request.getParameter("nombre");
            fechai=request.getParameter("Fecha");
            fechaf=request.getParameter("Fecha2");
            
            
            
            try{
            
                //querry para poder insertar los datos en la bd
                /*
                insert into nombretabla (atributo, atributo, ...)
                values ("valor1", 'valor2', valor3, ...)
                */
                
                String q = "insert into Mpromociones"
                        + "(nom_pro, fechai_pro, fechaf_pro) "
                        + "values "
                        + "('"+nom+"','"+fechai+"', '"+fechaf+"')";
            
                set.executeUpdate(q);
           
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de Usuarios</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "<br>El nombre es: " + nom);
            out.println("<br>"
                    +"La fecha de inicio es: "+fechai
                    +"<br>"
                    + "La fecha de fin es :"+fechaf
                    + "<br>");
            out.println("<h1>Registro Exitoso</h1>"
                    
                    + "<a href='crudpromo.html'>Regresar al Formulario</a>"
                            
                    + "<br>"
                    + "<a href='ConsultarPromociones'>Consultar la Tabla General de promociones</a>");
            out.println("</body>");
            out.println("</html>");
            
                System.out.println("Datos registrados en la tabla");
            
            }catch(Exception e){
                
                System.out.println("No se registraron los datos en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Registro de Usuarios</title>");            
                out.println("</head>");
                out.println("<body>"
                        + "<h1>No se pudo registrar, hubo un error</h1>"
                        + "<a href='index.html'>Regresar al Formulario</a>");
                        
            out.println("</body>");
            out.println("</html>");
            }
            
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
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
