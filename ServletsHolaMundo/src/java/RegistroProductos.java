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
public class RegistroProductos extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request peticiones por parte del cliente
     * @param response servlet response son las respuestas por parte del servidor
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    /*
    el servlet para poderse conectar con la bd, es necesario inicializar sus elementos
    voy a necesitar de 3 objetos que vienen de la clase sql
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
    
    
    
    
    
    protected void processRequest(HttpServletRequest request, 
            HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            //manipular los datos del formulario
            String nom, appat, appmat, correo, ip, iph, permiso;
            int edad, puerto, puertoh;
            
            ip = request.getLocalAddr();
            puerto = request.getLocalPort();
            
            iph = request.getRemoteAddr();
            puertoh = request.getRemotePort();
            
            
            
            nom = request.getParameter("nombre");
            
            edad = Integer.parseInt(request.getParameter("edad"));
            
            
            try{
            
                //querry para poder insertar los datos en la bd
                /*
                insert into nombretabla (atributo, atributo, ...)
                values ("valor1", 'valor2', valor3, ...)
                */
                
                String q = "insert into Mproductos"
                        + "(nom_pru, pre_pru ) "
                        + "values "
                        + "('"+nom+"', '"+edad+"')";
            
                set.executeUpdate(q);
           
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de Usuarios</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "<br>El nombre es: " + nom);
            out.println("<br>"
                    
                    + "<br>"
                    + "El precio por cada 100 gramos es:"+edad
                    + "<br>"
                    
                    + "<br>");
            out.println("<h1>Registro Exitoso</h1>"
                    
                    + "<br>"
                    + "<a href='crudus.html'>Regresar al Formulario</a>"
                            
                    + "<br>"
                    + "<a href='ContultarProductos'>Consultar la Tabla General de productos</a>");
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
