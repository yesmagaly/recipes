<?php

namespace Drupal\recipes_core\TwigExtension;


/**
 * Class TwigExtension.
 */
class TwigExtension extends \Twig_Extension {


   /**
    * {@inheritdoc}
    */
    public function getTokenParsers() {
      return [];
    }

   /**
    * {@inheritdoc}
    */
    public function getNodeVisitors() {
      return [];
    }

   /**
    * {@inheritdoc}
    */
    public function getFilters() {
      return [
        new \Twig_SimpleFilter('gretting', [$this, 'gretting']),
      ];
    }

    // 'Jose'|gretting
    // 'Jose'|gretting('es')
    public function gretting($value, $language = 'en') {

      if ($language == "es") {
        return "Hola {$value}";
      }

      return "Hello {$value}";
    }

   /**
    * {@inheritdoc}
    */
    public function getTests() {
      return [];
    }

   /**
    * {@inheritdoc}
    */
    public function getFunctions() {
      return [
        new \Twig_SimpleFunction('double', [$this, 'double']),

      ];
    }

    // double(8)
    // double('8')
    // double('8.2', 'int')
    public function double($value, $cast = 'float') {

      if ($cast == "int") {
        $normalized = (int) $value;
      } else {
        $normalized = (float) $value;
      }

      return $normalized * 2;
    }

   /**
    * {@inheritdoc}
    */
    public function getOperators() {
      return [];
    }

   /**
    * {@inheritdoc}
    */
    public function getName() {
      return 'recipes_core.twig.extension';
    }

}
