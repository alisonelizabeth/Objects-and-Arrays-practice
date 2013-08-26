$(document).ready
(
	function() 
	{

	books = {
		'fiction': {'mystery': [{title:'One for the Money', author: 'Janet Evanovich', pageCount: 352},
								{title: 'The Maltese Falcon', author:'Dashiell Hammett', pageCount: 217}], 
					'science fiction': [{title: '1984', author:'George Orwell', pageCount: 328},
								{title: 'The Hunger Games', author:'Suzanne Collins', pageCount: 384}],
					'western': [{title: 'True Grit: A Novel', author:'Charlest Portis', pageCount: 240},
								{title: 'The Lone Star Ranger', author:'Zane Grey', pageCount: 372}]
					},
		'nonfiction':{'biographies': [{title: 'Bossypants', author:'Tina Fey', pageCount: 283},
									{title: 'Stephen King: A Biography', author:'Albert Rolls', pageCount: 216}],

					'textbooks': [{title: 'Oxford English Dictionary', author:'Oxford University Press', pageCount: 1728},
								{title: 'JavaScript: The Good Parts', author:'Douglas Crockford', pageCount: 176}]
					}
			
		}


	} //end of document ready 
)


