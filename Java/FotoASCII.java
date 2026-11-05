package Java;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;

public class FotoASCII {
    public static void main(String[] args) throws Exception {

        // Cambia esto por el nombre de tu foto
        BufferedImage img = ImageIO.read(new File("foto.jpg"));

        int ancho = 100; // caracteres por linea
        int alto = (int) (img.getHeight() * (double) ancho / img.getWidth() * 0.5);

        // De oscuro a claro (para terminal con fondo negro)
        String chars = " .:-=+*#%@";

        for (int y = 0; y < alto; y++) {
            StringBuilder linea = new StringBuilder();
            for (int x = 0; x < ancho; x++) {
                int px = x * img.getWidth() / ancho;
                int py = y * img.getHeight() / alto;
                int rgb = img.getRGB(px, py);

                int r = (rgb >> 16) & 0xff;
                int g = (rgb >> 8) & 0xff;
                int b = rgb & 0xff;

                double brillo = 0.299 * r + 0.587 * g + 0.114 * b;
                int indice = (int) (brillo / 255 * (chars.length() - 1));
                linea.append(chars.charAt(indice));
            }
            System.out.println(linea);
        }
    }
}
