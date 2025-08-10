<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class SiteController extends AbstractController
{
	#[Route('/', name: 'home', methods: ['GET'])]
	public function homeAction(): Response
    { 
		$parameters = array();
		try {

		}
		finally {
			return $this->render('pages/home.html.twig', $parameters);
		}
	}
}
