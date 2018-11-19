package Views;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JSeparator;
import javax.swing.JTextField;
import javax.swing.border.LineBorder;

import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.CategoryPlot;

import graphics.GUIimage;
import graphics.GUIimagejpg;

public class BookPopularityUI extends JPanel {
	public JLabel lblBookRating;
	public JLabel lblBookId;
	public JButton btnTotalRank;
	public JButton btnGenreRank;
	public JLabel profile;
	public JLabel lblNewBookName;
	public JLabel lblAuthor;
	public JLabel lblGenere;
	public JLabel lblRank;
	public JButton btnBack;
	public JTextField textField;

	/**
	 * Create the panel.
	 */
	
	public BookPopularityUI() {
		this.setBounds(0, 0, 677, 562);
		this.setLayout(null);
		
		JSeparator separator = new JSeparator();
		separator.setBounds(0, 126, 677, 12);
		add(separator);
		
		lblBookRating = new JLabel("Book Rating");
		lblBookRating.setFont(new Font("Tahoma", Font.PLAIN, 26));
		lblBookRating.setBounds(270, 159, 154, 30);
		add(lblBookRating);
		
		lblBookId = new JLabel("Book ID :");
		lblBookId.setFont(new Font("Tahoma", Font.PLAIN, 14));
		lblBookId.setBounds(25, 209, 70, 30);
		add(lblBookId);
		
		textField = new JTextField();
		textField.setFont(new Font("Tahoma", Font.PLAIN, 14));
		textField.setBounds(92, 211, 86, 30);
		textField.setColumns(10);
		add(textField);
		
		
		btnTotalRank = new JButton("Overall ranking");
		btnTotalRank.setFont(new Font("Tahoma", Font.PLAIN, 14));
		btnTotalRank.setBounds(195, 211, 130, 30);
		add(btnTotalRank);
		
		btnGenreRank = new JButton("Rating by genre");
		btnGenreRank.setFont(new Font("Tahoma", Font.PLAIN, 14));
		btnGenreRank.setBounds(342, 211, 130, 30);
		add(btnGenreRank);
		
		profile = new JLabel("");
		profile.setBounds(30, 254, 180, 224);
		add(profile);
		
		lblNewBookName = new JLabel("");
		lblNewBookName.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblNewBookName.setBounds(240, 255, 350, 35);
		add(lblNewBookName);
		
		lblAuthor = new JLabel("");
		lblAuthor.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblAuthor.setBounds(240, 301, 350, 35);
		add(lblAuthor);
		
		lblGenere = new JLabel("");
		lblGenere.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblGenere.setBounds(240, 347, 350, 35);
		add(lblGenere);
		
		lblRank = new JLabel("");
		lblRank.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblRank.setBounds(240, 393, 350, 35);
		add(lblRank);
		
		btnBack = new JButton("Back");
		btnBack.setFont(new Font("Tahoma", Font.PLAIN, 14));
		btnBack.setBounds(31, 489, 89, 30);
		add(btnBack);
		
		JLabel lblBackground = new JLabel("New label");
		lblBackground.setBounds(0, 0, 671, 533);
		lblBackground.setIcon(new GUIimage("Background",lblBackground.getWidth(),lblBackground.getHeight()).image);
		add(lblBackground);
		
		
	}
	
}
