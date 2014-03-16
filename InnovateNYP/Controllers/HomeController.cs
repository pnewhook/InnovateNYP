using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InnovateNYP.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contact()
        {

            return View();
        }

        public ActionResult Medication()
        {
            return View();
        }

        public ActionResult Insight()
        {
            return View();
        }

        public ActionResult Vaccine()
        {
            return View();
        }

        public ActionResult Interaction(string drugName)
        {
            var conflicts = new List<string>();
            if (drugName.ToLower() == "aspirin")
            {
                conflicts.Add("N0000021982");
                return Json(conflicts, JsonRequestBehavior.AllowGet);
            }
            return Json(conflicts, JsonRequestBehavior.AllowGet);
        }

        public ActionResult FaceTracking()
        {
            return PartialView("_FaceTracking");
        }
    }
}